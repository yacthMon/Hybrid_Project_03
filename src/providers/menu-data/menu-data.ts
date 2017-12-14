import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the MenuDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
 
export class Menu {
	nameMenu:string;
	detail:string;
	menuPrice:number;
	nameImg:string;
}

export class Order{
  nameMenu:string;
  nameImg:string;
  menuPrice:number;
  amout:number;
}

@Injectable()
export class MenuDataProvider {

	menuList:FirebaseListObservable<any[]> ;

  orders: Order[]=[];
  constructor(public angularfire: AngularFireDatabase) {
 	this.menuList = angularfire.list('/menuList');
    console.log('Hello MenuDataProvider Provider');
  }

  addMenu(menu:Menu){
  	this.menuList.push(menu);
  }

  getMenu(){
  	return this.menuList;
  }

  getOrder(): Order[]{
    return this.orders;
  }

  addOrder(order: Order){
    this.orders.push(order);
  }

  calTotal(): number{
    let total = 0;

    return total;
  }


}
