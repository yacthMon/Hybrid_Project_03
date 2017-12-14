import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/*
  Generated class for the MenuDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class Menu {
  nameMenu: string;
  detail: string;
  menuPrice: number;
  nameImg: string;
}

export class Order {
  nameMenu: string;
  nameImg: string;
  menuPrice: number;
  amout: number;
}

@Injectable()
export class MenuDataProvider {

  menuList: FirebaseListObservable<any[]>;
  orderConfirms: FirebaseListObservable<any[]>;
  orders: Order[] = [];
  constructor(public angularfire: AngularFireDatabase) {
    this.menuList = angularfire.list('/menuList');
    this.orderConfirms = angularfire.list('/order_confirms');
  }

  addMenu(menu: Menu) {
    this.menuList.push(menu);
  }

  getMenu() {
    return this.menuList;
  }

  getOrderStatus(customerName: string) {
    return new Promise((resolve, reject):any => {
      this.angularfire.list('/order_confirms').subscribe(data => {
        console.dir(data);
        for (let i = 0; i < data.length; i++) {
          console.dir(data[i].Status);
          if (data[i].CustomerName == customerName)
          resolve({data:data[i].Status, key:data[i].$key});
        }
        reject(false);
      })
    })
  }

  getOrder(): Order[] {
    return this.orders;
  }

  addOrder(order: Order) {
    this.orders.push(order);
  }

  removeOrder(order: Order) {
    this.orders.splice(this.orders.indexOf(order), 1);
  }

  calTotal(): number {
    let total: number = 0;
    for (let i = 0; i < this.orders.length; i++) {
      total += parseInt(this.orders[i].menuPrice + "") * (this.orders[i].amout);
    }
    return total;
  }

  confirmOrder(customerName: string, deliveryType: string, deliveryLocation: string, deliveryDetail: string) {
    return new Promise((resolve, reject) => {
      this.isAlreadyOrder(customerName).then(() => {
        let orderConfirm = {
          CustomerName: customerName, DeliveryType: deliveryType, DeliveryLocation: deliveryLocation, DeliveryDetail: deliveryDetail, Orders: this.orders,
          Status: [{ state: "Receive Order", time: this.getCurrentTime(),icon: "basket" }], Total: this.calTotal()
        };
        this.orderConfirms.push(orderConfirm).then(() => {
          resolve();
        }, err => {
          reject(err);
        });
      }, () => {
        reject("คุณได้ทำการสั่งรายการไปแล้ว");
      })
    });
  }

  receiveFood(customerName){
    return new Promise((resolve,reject)=>{
      this.orderConfirms.remove(customerName).then(()=>{
        resolve();
      }, err=>{
        reject(err);
      })
    });
  }

  isAlreadyOrder(customerName: string) {
    return new Promise((resolve, reject) => {
      this.orderConfirms.forEach((ordered) => {
        if (ordered.length == 0) {
          resolve();
        }
        for (let i = 0; i < ordered.length; i++) {
          if (ordered[i].CustomerName == customerName) {
            reject();
          }
        }
      })
      resolve();
    })
  }

  getCurrentTime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
  }

}
