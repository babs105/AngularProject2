import { Pipe, PipeTransform } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value || !args || args==""){
      return value;
    }else{
     
      let search=args.toLowerCase();
      return value.filter((el  => el.nameVille.toLowerCase().includes(search)));
    }

  }

}
