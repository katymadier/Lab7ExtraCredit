import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { GalleryPage } from '../gallery/gallery';
import { Storage } from '@ionic/storage';

const PLACEHOLDER_IMAGE: string = "/assets/imgs/placeholder.jpg";
const SPINNER_IMAGE: string = "/assets/imgs/spinner.gif";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public pictures=[];
  public image:string = PLACEHOLDER_IMAGE;
  public timeStamp:string ="";

  constructor(public navCtrl: NavController, public camera: Camera, private storage: Storage) {}

  goToGallery(){
    this.navCtrl.push(GalleryPage);
  }

  takePic() {
    console.log("Taking picture")
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      if (imageData) {
        this.image = 'data:image/jpeg;base64,' + imageData;
        this.timeStamp = JSON.stringify(new Date());

        this.pictures.push({'src':this.image,'timeStamp':this.timeStamp});
        console.log(this.pictures);
        this.storage.set('pictures', this.pictures)

        document.getElementById('timeStamp').style.display="block";
        document.getElementById('timeStamp').innerHTML = this.timeStamp;
      } else {
        this.image = PLACEHOLDER_IMAGE;
        document.getElementById('timeStamp').style.display="none";
      }
     }, (err) => {
        this.image = PLACEHOLDER_IMAGE;
        document.getElementById('timeStamp').style.display="none";
     });
     this.image = SPINNER_IMAGE;
     document.getElementById('timeStamp').style.display="none";
  }

}
