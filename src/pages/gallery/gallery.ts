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
      for (let i=0;i<9;i++){
        this.pictures.push(val[i]);
      }
      console.log(this.pictures)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

}
