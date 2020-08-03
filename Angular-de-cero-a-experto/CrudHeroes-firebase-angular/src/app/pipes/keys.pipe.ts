import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../models/heroe.model';

@Pipe({
  name: 'keys',
  pure: false
})
export class KeysPipe implements PipeTransform {

  transform(heroes: any): any {
    
    let keys = [];

    for (let key in heroes) {
      keys.push(key)
    }
    return keys;
  }

}
