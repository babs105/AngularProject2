import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Meteo } from 'src/app/model/meteo';


@Component({
  selector: 'app-meteo-list',
  templateUrl: './meteo-list.component.html',
  styleUrls: ['./meteo-list.component.css']
})
export class MeteoListComponent implements OnInit {

  constructor() { }

  
  @Input() villeForSearch
  @Input() meteo:Meteo;
  @Input() villeSelected:string;
  @Input() montrer:boolean;

  @Output() meteoGen= new EventEmitter<string>();

  ngOnInit() {
  }


  sendToMyParent(nameVille:string){
   this.meteoGen.emit(nameVille);

  }
}
