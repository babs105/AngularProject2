import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { FormBuilder } from '@angular/forms';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  titre:string = "CONNEXION";
  color:string = '';
  succes:boolean;
  error:boolean;
  normal:boolean;
  message;
  checkoutForm;
  
  constructor(private loginService:LoginServiceService,private formBuilder: FormBuilder,private router:Router) {
     
    this.checkoutForm = this.formBuilder.group({
      login: '',
      password: ''
    });
   }

  ngOnInit() {
  }

 changerTitle(customerdata){
   this.titre=customerdata.titre;
   
  }
  seConnecter(data){
    this.normal=true;
    this.message="Authentification en cours....";
    this.succes=false;
    this.error=false;
   
    setTimeout(() =>{
    if(this.loginService.seConnecter(data.login,data.password)){
       this.normal=false
       this.succes=true;
       this.message="Authentification réussie";
      
       let redirect = this.loginService.redirectUrl ? this.router.parseUrl(this.loginService.redirectUrl) : '/dashbaord';
      setTimeout(() => this.router.navigateByUrl(redirect),2000);
    }else{
      this.normal=false;
      this.error=true;
      this.message="Désolé! Authentification échouée";
     
     
    } 
  },2000);
    
  }
}
