import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  public pictures=[];
  public image:string="";
  public timeStamp:string ="";

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get('pictures').then((val)=>{
      this.pictures=val;
      console.log('val')
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

}
