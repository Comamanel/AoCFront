import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'displayLeftPointsCaracteristics'
})
export class DisplayLeftPointsCaracteristicsPipe implements PipeTransform {

  transform(value: AbstractControl[], ...args: unknown[]): unknown {
    let result = 0;
    value.forEach(control => result += control.value-10);
    return result;
  }

}
