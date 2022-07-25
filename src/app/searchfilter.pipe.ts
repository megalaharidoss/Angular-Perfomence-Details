import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any, searchText:String): any {
    if(!value)return [];
    if(!searchText) return value;    
    return value.filter((animal:any) => {
            return animal.toLowerCase().includes(searchText)
          })
          return
    return null;
  }

}
