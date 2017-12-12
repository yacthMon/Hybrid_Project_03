import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuFoodPage } from '../menu-food/menu-food';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goMenuFood(){
  	this.navCtrl.push(MenuFoodPage);
  }

}
