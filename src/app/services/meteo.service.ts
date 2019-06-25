import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { METEOS } from '../model/mock-meteos';
import { Meteo } from '../model/meteo';



@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  // meteos:any=[
  //   {'name':'dakar','details':{'tempMatin':23,'tempSoir':30}},
  //   {'name':'thies','details':{'tempMatin':25,'tempSoir':35}},
  //   {'name':'Louga','details':{'tempMatin':29,'tempSoir':40}},
  //   {'name':'Matam','details':{'tempMatin':30,'tempSoir':30}},
  //   {'name':'Diourbel','details':{'tempMatin':30,'tempSoir':46}},
  //   {'name':'Kolda','details':{'tempMatin':30,'tempSoir':48}}
  // ]
  // lesmeteos:Meteo[];
  constructor() { 
    // this.lesmeteos.push({ nameVille: 'Dakar', tempMat: '25 C' ,tempSoir:'27 C'});
    
  }

 public  getAllMeteos():Observable<Meteo[]>{
    return of(METEOS);
  }
//  public getOneMeteoByName(name) {
//   let meteo=null;
//    meteosData.forEach(met => {
//      if(met.name===name){
//       meteo = met;
//      }
     
//    });
//     console.log(meteo)
//     return meteo;
//  }
// 
 public getOneMeteoByName(name) {
   return this.getAllMeteos().pipe(
       map((meteos:Meteo[]) =>
            meteos.find(meteo => meteo.nameVille===name)
       )
   );

 }

 public addMeteo(meteo:Meteo):boolean{
   return METEOS.length < METEOS.push(meteo)?true:false;

 }

}
