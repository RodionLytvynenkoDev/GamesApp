import { Pipe, PipeTransform } from '@angular/core';
import { IGame } from "../interfaces/game";

@Pipe({ name: 'filterAll' })
export class FilterPipe implements PipeTransform {
  transform(value: any, searchText: string): IGame[] {
    if (value) {
      return value.filter((data: any) => this.matchValue(data, searchText));
    } else {
      return value
    }
  }

  matchValue(data: any, value: string) {
    return Object.keys(data).map((key) => {
      return new RegExp(value, 'gi').test(data[key]);
    }).some(result => result);
  }
}
