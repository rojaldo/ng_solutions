import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alcohol'
})
export class AlcoholPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (typeof value === 'number') {
      let entera = Math.floor(value);
      let decimal= Math.round(10* (value - entera));

      if (args.length === 0) {
        return entera+','+decimal + 'º';
      } else {
        if (args[0] === '%') {
          return entera+','+decimal + '% vol.';
        }
        return entera+','+decimal + 'º';
      }
    } else {
      console.error('PIPE Alcohol: wrong type value');
      return value;
    }
  }

}
