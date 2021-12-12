import { Component, OnInit, ViewChild,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginService } from "../login.service";

export interface nUser{

}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router,private service: LoginService,public alertCtrl: AlertController) { }
signup(){
   this.router.navigate(['signup']);
}
async showAlert() {
    const alert = await this.alertCtrl.create({
      header:"incorect email or password!",
      subHeader:"please try again",
      buttons: ['OK']
    });
    await alert.present();
  }
  async showAlert2() {
    const alert = await this.alertCtrl.create({
      header:"please write your email and password",
     
      buttons: ['OK']
    });
    await alert.present();
  }

  
onSubmit(form: NgForm){
  console.log(form.value.email);
  if (form.value.email ===""||form.value.psw==="") {
    this.showAlert2();
  }
  else{
     const user = form.value;
  console.log(user);
  this.service.postUser(user).subscribe( Response =>{
      console.log(Response);
    this.service.setData(Response[0].qrcode);
      if (Response[1] == "Mabrouk") {
        this.router.navigate(['home']);
      }else{
        this.showAlert();
      }
    });
  }
 
}
  ngOnInit() {
  }

}
