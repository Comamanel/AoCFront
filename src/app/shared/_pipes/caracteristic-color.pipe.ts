import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caracteristicColor'
})
export class CaracteristicColorPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if(value >= 9.5)
      return 'salmon';
      
    if(value >= 8.0)
      return 'green';
    
    if(value >= 6.0)
      return 'lightGreen';
      
    return '';
  }

}
