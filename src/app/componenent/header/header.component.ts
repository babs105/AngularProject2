import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService:LoginServiceService,) { }

  ngOnInit() {
  }

  logout(){
    
  this.loginService.seDeconnecter();
  }

}
