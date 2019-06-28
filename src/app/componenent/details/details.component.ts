import { Component, OnInit } from '@angular/core';
import { MeteoService } from 'src/app/services/meteo.service';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map,switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // details;
  meteo;
  date=new Date().toDateString();
  name;
  
  constructor(
    private meteoService:MeteoService,
    private activeRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    // this.activeRoute.paramMap.subscribe(params =>{
    //   let name=params.get("name");
    //   console.log("name",name)
    //   this.details=this.meteoService.getOneMeteoByName(name);
    //   console.log("details",this.details)
    // })

    //  this.details=this.activeRoute.paramMap.pipe( map(paramMap => paramMap.get('name')),switchMap(name => this.meteoService.getOneMeteoByName(name))
        
    // :);
    //  console.log("details",this.details);
    //  this.name = this.activeRoute.snapshot.paramMap.get('name');
    // this.event=this.activeRoute.snapshot.paramMap.get('event');
    
    
     this.activeRoute.paramMap.pipe(
        switchMap((params:ParamMap) => {
           this.name=params.get('name');
          return this.meteoService.getOneMeteoByName(params.get('name'));

        })
     ).subscribe(meteo => this.meteo=meteo);

    console.log("meteo" ,this.meteo);
  }
    gotoListVilles() {
      this.router.navigate(['/dashbaord',{name:this.name}]);

    }

}