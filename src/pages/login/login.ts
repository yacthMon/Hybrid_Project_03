import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook, public menu: MenuController, public userData: UserDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginFacebook() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into Facebook!', res)
        this.getUserData(res);
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  getUserData(res: any) {
    this.fb.api("/" + res.authResponse.userID, []).then((data) => {
      this.userData.name = data.name;
      console.log("Facebook response", data);
      this.fb.api("/" + res.authResponse.userID + "/picture?type=square&height=64&width=64&redirect=false", []).then((picture) => {
        this.userData.profilePictureURL = picture.data.url;
        console.log("Facebook response", picture);
      }).catch((err) => {
        console.log("Facebook get Data error ", err);
      });
      this.navCtrl.setRoot(HomePage);
    }).catch((err) => {
      console.log("Facebook get Data error ", err);
    });
  }

  fakeLogin(){
    this.userData.name = "yacth_Mon"
    this.userData.profilePictureURL = "./assets/imgs/avartar.jpg";
    this.navCtrl.setRoot(HomePage, {},{animate: true, direction: 'forward'});
  }
}
