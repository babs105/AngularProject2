import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Meteo } from 'src/app/model/meteo';

@Component({
  selector: 'app-button-search',
  templateUrl: './button-search.component.html',
  styleUrls: ['./button-search.component.css']
})
export class ButtonSearchComponent implements OnInit {


  villeForSearch;
  @Input() meteos:Meteo[];
  @Input() villeSelected:string;
  

  @Output() meteoGen= new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  

 
  donnerNomVille(nameVille:string){
    this.meteoGen.emit(nameVille);
 
   }
  
}
