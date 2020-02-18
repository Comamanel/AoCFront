import { Pipe, PipeTransform } from '@angular/core';
import { Age } from 'src/app/_models/cyclist-list-model';

@Pipe({
  name: 'ageFormatter'
})
export class AgeFormatterPipe implements PipeTransform {

  transform(value: Age, ...args: any[]): any {
    return value.years + ' years, ' + value.month + ' month and ' + value.days + ' days old.';
  }
 
}
