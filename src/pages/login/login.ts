import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook, public menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginFacebook() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => this.showData(res))
      .catch(e => console.log('Error logging into Facebook', e));
  }

  showData(res){
    console.log('Logged into Facebook!', res)
    this.fb.api("/"+res.authResponse.userID,[]).then((data)=>{
      console.log("Facebook response", data);
    }).catch((err)=>{
      console.log("Facebook get Data error ", err);
    });
  }
}
