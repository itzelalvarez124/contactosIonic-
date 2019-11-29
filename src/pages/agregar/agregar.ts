import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {
  avatar = '../assets/imgs/contacto.png';
  nombre = '';
  correo = '';
  telefono = '';
  facebook = '';
  instagram = '';
  twitter = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

  addContacto(){
    console.log('addContacto');

    const contacto = {
      avatar: this.avatar,
      nombre: this.nombre,
      correo: this.correo,
      telefono: this.telefono,
      facebook: this.facebook,
      instagram: this.instagram,
      twitter: this.twitter

    };
    console.log(JSON.stringify(contacto));

    this.http.post('/agenda/agenda/',contacto)
    .subscribe(data =>{
      console.log(JSON.stringify(data));
      this.navCtrl.pop();
    }, error => {
      console.log(JSON.stringify(error));
      this.navCtrl.pop();
    });
  }

}
