import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: string): string {
    if(value==="manager")return "מנהל/ת"
    if(value==="doctor")return "רופא/ה"
    return "מזכיר/ה"
  }

}
