import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the EliminarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eliminar',
  templateUrl: 'eliminar.html',
})
export class EliminarPage {
  id = '';
  avatar = '';
  nombre = '';
  correo = '';
  telefono = '';
  facebook = '';
  instagram = '';
  twitter = '';


  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    console.log('ionViewDidLoad EliminarPage');
  }

  clickE(){
  }
  

  clickCancelar(){this.navCtrl.pop();}

}
