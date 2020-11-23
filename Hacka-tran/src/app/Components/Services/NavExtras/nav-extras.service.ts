import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavExtrasService {

  private bundle: any;

  constructor() { }

  public getBundle(){
    return this.bundle;
  }

  public setBundle(bundle: any){
    this.bundle = bundle;
  }
}
