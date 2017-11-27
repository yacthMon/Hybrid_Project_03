import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { FirstPage } from '../../pages/first/first';

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
      this.navCtrl.setRoot(FirstPage);
    }).catch((err) => {
      console.log("Facebook get Data error ", err);
    });
  }

  fakeLogin(){
    this.userData.name = "yacth_Mon"
    this.userData.profilePictureURL = "https://scontent.xx.fbcdn.net/v/t1.0-1/p64x64/12043031_955783051127718_3862466570486282121_n.jpg?oh=502c247dd4c2570331db98068f71cf42&oe=5AA10C4E";
    this.navCtrl.setRoot(FirstPage);
  }
}
