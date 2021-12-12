import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailValidator, NgForm } from "@angular/forms";
import { UserServiceService, User } from "../user-service.service";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router:Router,private service: UserServiceService,public alertCtrl: AlertController) { }
signup(){
  
}
back(){
  this.router.navigate(['login']);
}

async showAlert2() {
    const alert = await this.alertCtrl.create({
      header:"please complete all required fields",
     
      buttons: ['OK']
    });
    await alert.present();
  }

onSubmit(form: NgForm){
  if (form.value.email ===""||form.value.psw==="" || form.value.qrcode==="") {
    this.showAlert2();
  }
  else{
    this.router.navigate(['login']);
    const user = form.value;
  this.service.postUser(user).subscribe( Response =>{
      console.log(Response);
    });
  }
  
}

  ngOnInit() {
  }

}
