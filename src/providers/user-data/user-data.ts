import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {
  name:string;
  profilePictureURL:string;


  constructor(public http: HttpClient, private fb: Facebook) {
    console.log('Hello UserDataProvider Provider');
  }

  loginFacebook() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into Facebook!', res)
        this.getUserData(res);
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  getUserData(res:any){
    this.fb.api("/"+res.authResponse.userID,[]).then((data)=>{
      this.name = data.name;
      console.log("Facebook response", data);
    }).catch((err)=>{
      console.log("Facebook get Data error ", err);
    });
    this.fb.api("/"+res.authResponse.userID+"/picture?type=square&height=64&width=64",[]).then((data)=>{
      this.profilePictureURL = data.data.url;
      console.log("Facebook response", data.data.url);
    }).catch((err)=>{
      console.log("Facebook get Data error ", err);
    });
  }

}
