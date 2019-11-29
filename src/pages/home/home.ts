import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {AgregarPage} from "../agregar/agregar";
import { DetallesPage } from '../detalles/detalles';
import { EliminarPage } from '../eliminar/eliminar';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contactos:any;
  agregarPage = AgregarPage;
  detallesPage = DetallesPage;
  eliminarPage = EliminarPage;

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

  clickContacto(avatar, nombre, correo, telefono, facebook, instagram, twitter){
    this.navCtrl.push(this.detallesPage,{avatar:avatar, nombre:nombre, correo:correo, telefono:telefono, facebook:facebook, instagram:instagram,twitter:twitter})

  }

  clickDelete(id, avatar, nombre, correo, telefono, facebook, instagram, twitter){
    this.navCtrl.push(this.eliminarPage,{id:id, avatar:avatar, nombre:nombre, correo:correo, telefono:telefono, facebook:facebook, instagram:instagram,twitter:twitter})

  }

}
