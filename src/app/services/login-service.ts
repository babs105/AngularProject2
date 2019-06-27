import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn=false;
  redirectUrl: string;


  constructor(private router:Router) { }


  seConnecter(login,password){
   
    if(login ==='edacy' && password === 'cohorte8')
      return this.isLoggedIn=true;
    else
      return this.isLoggedIn=false;
  }
  seDeconnecter():void{
    this.isLoggedIn=false;
    this.router.navigate(['/home']);
  }
}
