import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router:Router) { }
signup(){
  this.router.navigate(['login']);
}
back(){
  this.router.navigate(['login']);
}
onSubmit(form: NgForm){
  const user = form.value;
}
  ngOnInit() {
  }

}
