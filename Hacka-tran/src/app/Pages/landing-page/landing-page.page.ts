import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit, OnDestroy {

  private authListener: Subscription;

  constructor(private router: Router, private fireAuth: AngularFireAuth) { }
  ngOnDestroy(): void {
    this.authListener.unsubscribe();
  }

  ngOnInit() {
    this.authListener = this.fireAuth.authState.subscribe(user => {
      if(user != null){
        this.router.navigate(['home']);
      }
    });
  }

  navigate(to: string){
    this.router.navigate([to]);
  }

}
