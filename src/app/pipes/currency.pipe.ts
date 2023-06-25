import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number | undefined | null, currencyCode = 'EUR'): unknown {
    if (value === null || value === undefined){
      return '-';
    }

    if (currencyCode === 'EUR'){
      return `${value.toFixed(2)} €`;
    }

    if (currencyCode === 'USD'){
      return '$ ' + value.toFixed(2);
    }
    
    return '';

  }

}
