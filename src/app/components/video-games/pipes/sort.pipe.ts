import { Pipe, PipeTransform } from '@angular/core';
import { SortCriteria } from "../interfaces/sort-criteria";
import { IGame } from "../interfaces/game";

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: IGame[], criteria: SortCriteria): any {

    if (!value || !criteria || criteria.property === '')
      return value;
    let sortValue = [...value]
    let p: string = criteria.property;

    let sortFn:(a: any, b: any) => any = (a, b) => {
      let value = 0;
      if (a[p] === undefined) value = -1;
      else if (b[p] === undefined) value = 1;
      else value = a[p] > b[p] ? 1 : (b[p] > a[p] ? -1 : 0);
      return criteria.descending ? (value * -1) : value;
    };

    sortValue.sort(sortFn);
    return sortValue;
  }

}
