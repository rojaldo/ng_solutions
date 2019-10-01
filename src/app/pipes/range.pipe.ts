import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value instanceof Array) {
      if (value.length > 0) {
        if(typeof args[0] === 'number' && typeof args[1]==='number') {
          let result: any[] = [];
          for (const beer of value) {
            if(beer.abv === undefined) {
              console.error('PIPE range: wrong type for value in this pipe');
              return value;
            }
            if(beer.abv >= args[0] && beer.abv <= args[1]) {
              result.push(beer);
            }
          }
          return result;
        }
      }
    }
    return value;
  }

}
