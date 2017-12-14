import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { ToastController } from 'ionic-angular';
import { Toast } from 'ionic-angular/components/toast/toast';
/**
 * Generated class for the QrcodeScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-qrcode-scan',
  templateUrl: 'qrcode-scan.html',
})
export class QrcodeScanPage {
  callbackToPrevious: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private qrScanner: QRScanner, private toastCtrl:ToastController) {
    this.callbackToPrevious = this.navParams.get('callback');
  }

  ionViewDidLoad() {
    window.document.querySelector('ion-app').classList.add('transparentBody');
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          //this.qrScanner.resumePreview();
          // show camera preview
          this.qrScanner.show()
            .then((data: QRScannerStatus) => {
              console.log('datashowing', data.showing);              
            }, err => {
              console.log(err);
            });
            // wait for user to scan something, then the observable callback will be called
            let scanSub = this.qrScanner.scan().subscribe((text: string) => {
              console.log('Scanned something', text);
              if(text.indexOf("table") > -1){
                this.qrScanner.hide(); // hide camera preview
                scanSub.unsubscribe(); // stop scanning
                this.callbackToPrevious(text).then((() => { this.navCtrl.pop() }));
              }else{
                let toast = this.toastCtrl.create({
                  message: 'QR Code ไม่ตรงกับโต๊ะของร้าน',
                  duration: 3000,
                  position: 'top',
                  showCloseButton: true
                });
                toast.present();
              }            
            });
          

        } else if (status.denied) {
          console.log("access denied")
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          console.log("access cancel")
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  cancleScan(){
    this.navCtrl.pop();
  }
}
