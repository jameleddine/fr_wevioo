import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(items: any[], title,contract,date): any {

    if (items && items.length){
      return items.filter(item =>{
          if (title && item.title.toLowerCase().indexOf(title.toLowerCase()) === -1){
              return false;
          }
          if (contract && item.contract_type[0].toLowerCase().indexOf(contract.toLowerCase()) === -1){
              return false;
          }
          if (date && item.entry_date.indexOf(date) === -1){
              return false;
          }
          return true;
     })
  }
  else{
      return items;
  }
}
}
