import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the DetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html',
})
export class DetallesPage {
  id = 0;
  avatar = '';
  nombre = '';
  correo = '';
  telefono = '';
  facebook = '';
  instagram = '';
  twitter = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient:HttpClient) {
    this.id = navParams.get('id');
    this.avatar = navParams.get('avatar');
    this.nombre = navParams.get('nombre');
    this.correo = navParams.get('correo');
    this.telefono = navParams.get('telefono');
    this.facebook = navParams.get('facebook');
    this.instagram = navParams.get('instagram');
    this.twitter = navParams.get('twitter');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesPage');
  }

  clickE(){
     this.httpClient.delete(`/agenda/agenda/${this.id}`)
    .subscribe(data => {
        console.log(JSON.stringify(data));
      }, error => {
        console.log(JSON.stringify(error));
      });

      this.navCtrl.popToRoot();
  }
  

  clickCancelar(){this.navCtrl.pop();}

}
