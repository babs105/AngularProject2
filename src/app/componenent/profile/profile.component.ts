import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  tab:any=[
    {prenom:"Ousmane Ndiaye"},
    {prenom:"Fallou Sene"},
    {prenom:"Bara DIOP"},
    {prenom:"Aminata BA"},
    {prenom:"Salif Coly"},
    {prenom:"Rama Ndiaye"}
  ]
 prenom:string;
 editable=-1;
  constructor() { }

  ngOnInit() {

  }
   addToList(name:string){
     this.tab.push({prenom:name});

   }
  //   editer(){
  //    this.editable=true;

  //  }
  updateName(i){
     
     this.tab[i].prenom=this.prenom;
     this.editable=-1;
     this.prenom='';
   }

}
