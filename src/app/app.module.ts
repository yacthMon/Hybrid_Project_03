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

import { Geolocation } from '@ionic-native/geolocation';
import { Facebook } from '@ionic-native/facebook';
import { QRScanner } from '@ionic-native/qr-scanner';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserDataProvider } from '../providers/user-data/user-data';

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
    MenuFoodPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    MenuFoodPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    QRScanner,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataProvider
  ]
})
export class AppModule {}
