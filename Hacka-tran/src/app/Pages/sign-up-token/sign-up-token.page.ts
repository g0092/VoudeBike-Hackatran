import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavExtrasService } from 'src/app/Components/Services/NavExtras/nav-extras.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up-token',
  templateUrl: './sign-up-token.page.html',
  styleUrls: ['./sign-up-token.page.scss'],
})
export class SignUpTokenPage implements OnInit, OnDestroy {

  private signUpTokenFG: FormGroup;
  private bundle: any;
  private confirmation: firebase.default.auth.ConfirmationResult;
  private userData: firebase.default.auth.UserCredential;
  private invalidToken: boolean;
  private authStateListener: Subscription;

  constructor( private router: Router, private navExtras: NavExtrasService, private formBuilder: FormBuilder, private fireAuth: AngularFireAuth) { 
    this.invalidToken = false;
    this.signUpTokenFG = this.formBuilder.group({
      token: ['', [Validators.required]]
    });
  }
  ngOnDestroy(): void {
    this.authStateListener.unsubscribe();
  }

  ngOnInit() {
    this.authStateListener = this.fireAuth.authState.subscribe(user => {
      if(user != null){
        this.router.navigate(['home']);
      }
    });
    this.bundle = this.navExtras.getBundle();
    this.confirmation = this.bundle['confirmation'];
    this.userData = this.bundle['userData'];
  }

  async confirmToken(){
    if(!this.signUpTokenFG.valid){
      return;
    } else {
      try{
        await this.confirmation.confirm(`${this.signUpTokenFG.get('token').value}`);
        await this.fireAuth.createUserWithEmailAndPassword(this.userData['email'], this.userData['password']);
      } catch(error){
        console.log(error);
        this.invalidToken = true;
      }
    }

  }

}
