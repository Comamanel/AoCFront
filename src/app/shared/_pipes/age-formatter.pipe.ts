import { Pipe, PipeTransform } from '@angular/core';
import { Age } from 'src/app/_core/_models/cyclist-list-model';

@Pipe({
  name: 'ageFormatter'
})
export class AgeFormatterPipe implements PipeTransform {

  transform(value: Age, ...args: any[]): any {
    if(value == null)
      return '';
    return value.years + ' years, ' + value.month + ' month and ' + value.days + ' days old.';
  }
 
}
