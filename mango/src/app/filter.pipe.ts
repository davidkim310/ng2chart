import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any, args?: any): any {
    if (items.length === 0) {
      return items;
    }
  return items.filter(item => item.category.toLowerCase().indexOf(args) !== -1)
}
}
