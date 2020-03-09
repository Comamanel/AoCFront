import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caracteristicColor'
})
export class CaracteristicColorPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if(value >= 95)
      return 'orangeRed';
      
    if(value >= 85)
      return 'green';
    
    if(value >= 70)
      return 'yellow';

    if(value >= 50){
      return 'lightGreen';
    }
      
    return '';
  }

}
