import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { UserServiceService, User } from "../user-service.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router:Router,private service: UserServiceService) { }
signup(){
  this.router.navigate(['login']);
}
back(){
  this.router.navigate(['login']);
}
onSubmit(form: NgForm){
  const user = form.value;
  this.service.postUser(user).subscribe( Response =>{
      console.log(Response);
    });
}
  ngOnInit() {
  }

}
