import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import * as firebase from "firebase/";
import { ConfirmPasswordValidator } from 'src/app/Components/Validators/CustomFormValidators';
import { Router } from '@angular/router';
import { NavExtrasService } from 'src/app/Components/Services/NavExtras/nav-extras.service';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { SignUpStateList } from 'src/app/Interfaces/SignUpStateList.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit, OnDestroy {

  private signUpFG: FormGroup;
  private authListener: Subscription;
  private stateList: SignUpStateList[];
  private selectedState: SignUpStateList | null;

  constructor(private formBuilder: FormBuilder, private fireAuth: AngularFireAuth, private router: Router, private navExtras: NavExtrasService, private firestore: AngularFirestore) { 
    this.selectedState = {
      cities: [],
      id: null,
      name: null,
      description: null
    };
    this.stateList = [];
    this.signUpFG = this.formBuilder.group({
      name: ['', Validators.required],
      surename: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirmation: ['', [Validators.required, ConfirmPasswordValidator]],
      birthDate: ['', Validators.required],
      transportMean: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required]
    });
  }
  ngOnDestroy(): void {
    this.authListener.unsubscribe();
  }

  ngOnInit() {
    this.authListener = this.fireAuth.authState.subscribe(user => {
      if(user != null){
        this.router.navigate(['home']);
      }
    });
    this.getStateList();
  }
  
  async getStateList(){
    try{
      const result = await this.firestore.collection('Parameters/SignUp/Countries/br/States').get().toPromise();
      result.docs.forEach(doc => {
        this.stateList.push(doc.data() as SignUpStateList);
      });
      console.log(this.stateList);
    } catch(error){
      console.log(error);
    }
  }

  getMaxDate(){
    return moment().format('YYYY-MM-DD');
  }

  async doSignUp(){
    if(!this.signUpFG.valid){
      return;
    }
    const recaptchaVerifier: firebase.default.auth.RecaptchaVerifier = new firebase.default.auth.RecaptchaVerifier('recapcha', {
      size: 'invisible',
      callback: (response: any) => {
        console.log(response);
      }
    })
    // let confirmation: any;
    let confirmation: firebase.default.auth.ConfirmationResult;
    try{
      // confirmation = {valid: () => {console.log('i can fly')}};
      confirmation = await this.fireAuth.signInWithPhoneNumber(`+55${this.signUpFG.get('phoneNumber').value}`, recaptchaVerifier);
    } catch(error) {
      confirmation = null;
    }
    if(confirmation != null){
      console.log(confirmation);
      this.navExtras.setBundle({
        confirmation: confirmation,
        userData: this.makeObjFromForm(this.signUpFG)
      });
      this.router.navigate(['sign-up-token']);
    }
  }

  changeSelectedState(event: any){
    console.log(event);
    this.selectedState = this.stateList.filter(state => state.id = event.detail.value)[0];
  }


  private makeObjFromForm(form: FormGroup): { [key: string]: any }{
    const obj = {};
    const keys: string[] = Object.keys(form.controls);
    keys.forEach(key => {
      obj[key] = form.controls[key].value;
    });
    return obj;
  }

}
