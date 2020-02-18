import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caracteristicColor'
})
export class CaracteristicColorPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if(value >= 9.5)
      return 'orangeRed';
      
    if(value >= 8.5)
      return 'green';
    
    if(value >= 7.5)
      return 'yellow';

    if(value >= 6.0){
      return 'lightGreen';
    }
      
    return '';
  }

}
