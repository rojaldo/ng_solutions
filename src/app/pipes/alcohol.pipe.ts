import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alcohol'
})
export class AlcoholPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (typeof value === 'number') {
      if(args === undefined){
        return value + 'º';
      }else {
        if (args[0] === '%') {
          return value + '%';
        } else {
          return value + 'º';
        }
      }  
    } else {
      console.error('PIPE alcohol: wrong type value');
      return value;
    }
  }

}
