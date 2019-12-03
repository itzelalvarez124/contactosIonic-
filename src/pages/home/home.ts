import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {AgregarPage} from "../agregar/agregar";
import { DetallesPage } from '../detalles/detalles';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contactos:any;
  agregarPage = AgregarPage;
  detallesPage = DetallesPage;
  

  constructor(public navCtrl: NavController,
    public http: HttpClient){
      /*this.http.get('/agenda/agenda/')
      .subscribe(data => {
        this.contactos = data;
        console.log(JSON.stringify(data));
      }, error => {
        console.log(JSON.stringify(error));
      });*/

  }

  ionViewWillEnter(){
    this.http.get('/agenda/agenda/')
    .subscribe(data => {
      this.contactos = data;
      console.log(JSON.stringify(data));
    }, error => {
      console.log(JSON.stringify(error));
    });

  }

  clickAdd(){
    this.navCtrl.push(this.agregarPage);
    
  }

  clickContacto(id,avatar, nombre, correo, telefono, facebook, instagram, twitter){
    this.navCtrl.push(this.detallesPage,{id: id,avatar:avatar, nombre:nombre, correo:correo, telefono:telefono, facebook:facebook, instagram:instagram,twitter:twitter})

  }

}
