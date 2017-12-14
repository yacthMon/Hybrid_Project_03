import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToastController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { OrderPage } from '../pages/order/order';
import { QrcodeScanPage } from '../pages/qrcode-scan/qrcode-scan';
import { LoginPage } from '../pages/login/login'; 
import { UserDataProvider } from '../providers/user-data/user-data';
import { CheckStatusPage } from '../pages/check-status/check-status';
import { AddmenuPage } from '../pages/addmenu/addmenu';
import { SelectTypePage } from '../pages/select-type/select-type';



import { Facebook } from '@ionic-native/facebook';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public userData: UserDataProvider, public fb:Facebook,private toastCtrl: ToastController) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Order', component: OrderPage },
      { title: 'Check Status', component: CheckStatusPage},
      { title: 'Add menu', component: AddmenuPage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  doLogout(){
    if(this.userData.name == "yacth_Mon"){
      let toast = this.toastCtrl.create({
        message: 'Logout จากระบบเรียบร้อย',
        duration: 2000,
        position: 'bottom',
        showCloseButton: true
      });
      toast.present();
      this.nav.setRoot(LoginPage);
    }

    this.fb.logout().then(()=>{
      let toast = this.toastCtrl.create({
        message: 'Logout จากระบบเรียบร้อย',
        duration: 2000,
        position: 'bottom',
        showCloseButton: true
      });
      toast.present();
      this.nav.setRoot(LoginPage);
    }).catch((err)=>{
      console.log("Error logout", err);
    });
  }
}
