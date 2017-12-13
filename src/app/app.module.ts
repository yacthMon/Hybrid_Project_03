import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OrderPage } from '../pages/order/order';
import { GoogleMapPage } from '../pages/google-map/google-map';
import { QrcodeScanPage } from '../pages/qrcode-scan/qrcode-scan'
import { LoginPage } from '../pages/login/login'; 
import { FirstPage } from '../pages/first/first';
import { CheckStatusPage } from '../pages/check-status/check-status';
import { FoodDetailPage } from '../pages/food-detail/food-detail';
import { MenuFoodPage } from '../pages/menu-food/menu-food';
import { AddmenuPage } from '../pages/addmenu/addmenu';
import { SelectTypePage } from '../pages/select-type/select-type';

import { Geolocation } from '@ionic-native/geolocation';
import { Facebook } from '@ionic-native/facebook';
import { QRScanner } from '@ionic-native/qr-scanner';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2' ;
import { AngularFireDatabaseModule } from 'angularfire2/database' ;

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserDataProvider } from '../providers/user-data/user-data';
import { MenuDataProvider } from '../providers/menu-data/menu-data';





export const config = {
    apiKey: "AIzaSyDLaLKWgZ1yyWFY5ZNW8Oz7FmTXg867dtg",
    authDomain: "projecthybrid3.firebaseapp.com",
    databaseURL: "https://projecthybrid3.firebaseio.com",
    projectId: "projecthybrid3",
    storageBucket: "projecthybrid3.appspot.com",
    messagingSenderId: "815119227985"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrderPage,
    GoogleMapPage,
    QrcodeScanPage,
    LoginPage,
    FirstPage,
    CheckStatusPage,
    FoodDetailPage,
    MenuFoodPage,
    AddmenuPage,
    SelectTypePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OrderPage,
    GoogleMapPage,
    QrcodeScanPage,
    LoginPage,
    FirstPage,
    CheckStatusPage,
    FoodDetailPage,
    MenuFoodPage,
    AddmenuPage,
    SelectTypePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    QRScanner,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataProvider,
    MenuDataProvider
  ]
})
export class AppModule {}
