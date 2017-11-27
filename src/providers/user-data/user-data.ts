
import { Injectable } from '@angular/core';
/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {
  name:string;
  profilePictureURL:string;


  constructor() {
    console.log('Hello UserDataProvider Provider');
  }

}
