import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuDataProvider} from "../../providers/menu-data/menu-data";
import { UserDataProvider} from "../../providers/user-data/user-data";
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the CheckStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-check-status',
  templateUrl: 'check-status.html',
})
export class CheckStatusPage {
  status:any;
  key:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuData: MenuDataProvider, public userData:UserDataProvider, private toastCtrl: ToastController) {
    menuData.getOrderStatus(userData.name).then((status:any)=>{
      this.status = status.data;
      this.key = status.key;
      console.log(this.key);
      if(this.status){
        console.dir(this.status);
      }else{
        console.log("Status not found")
      }
    }).catch((err)=>{
      console.log(err);
    })
    
  }

  receiveFood(){
    this.menuData.receiveFood(this.key).then(()=>{
      let toast = this.toastCtrl.create({
        message: 'เสร็จสิ้นรายการแล้ว ขอบคุณที่ใช้บริการ',
        duration: 5000,
        position: 'bottom',
        showCloseButton: true
      });
      toast.present();
      setTimeout(() => {
        this.navCtrl.popToRoot();
      }, 5000);
    })
  }

}
