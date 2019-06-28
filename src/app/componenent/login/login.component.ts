import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login-service';
import { FormBuilder } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  titre:string = "AUTHENTICATION";
  affichFormLogin:boolean=true;
  succes:boolean;
  error:boolean;
  normal:boolean;
  message;
  checkoutForm;
  userDetails: any;
  // isForgotPassword: boolean;
  
  
  constructor(private authFirebaseService :AuthFirebaseService,private activeRoute: ActivatedRoute, private loginService:LoginService,private formBuilder: FormBuilder,private router:Router) {
     
    this.checkoutForm = this.formBuilder.group({
      login: '',
      password: ''
    });
   }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params=> {
      if(params.get('form')==="log"){
          this.affichFormLogin=true;
          this.titre= "AUTHENTICATION";
      }else if (params.get('form')==="reg"){
        this.affichFormLogin=false;
        this.titre= "REGISTRATION";
      }
      }
    );
     
       
        
  }

 changerTitle(customerdata){
   this.titre=customerdata.titre;
   
  }
  
  // Check localStorage is having User Data
  isUserLoggedIn() {
    this.userDetails = this.authFirebaseService.isUserLoggedIn();
  }



  registerUser(data){
    this.authFirebaseService.register(data.login,data.password).then(res=>{
        console.log(res);

         // Send Varification link in email
        this.authFirebaseService.sendEmailVerification().then(res => {
            console.log(res);
        
            this.message="Registration Successful! Please Verify Your Email";
          }, err => {
            this.message=err.message;
          });
        this.isUserLoggedIn();
        
      }, err => {
        this.message=err.message;
      });


  }
  loginUser(data){
    this.normal=true;
    this.message="Authentification en cours....";
    this.succes=false;
    this.error=false;
   
  //   setTimeout(() =>{
  //   if(this.loginService.seConnecter(data.login,data.password)){
  //      this.normal=false
  //      this.succes=true;
  //      this.message="Authentification réussie";
      
  //      let redirect = this.loginService.redirectUrl ? this.router.parseUrl(this.loginService.redirectUrl) : '/home';
  //     setTimeout(() => this.router.navigateByUrl(redirect),2000);
  //   }else{
  //     this.normal=false;
  //     this.error=true;
  //     this.message="Désolé! Authentification échouée";
     
     
  //   } 
  // },2000);
    
  }
}
