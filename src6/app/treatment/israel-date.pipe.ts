import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DatePipe implements PipeTransform {

  transform(value: string): string {

    var d=value.slice(8)
    d+="/"
    d+=value.slice(5,7)
    d+="/"
    d+=value.slice(0,4)
    return d
  }

}
