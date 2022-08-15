import { Pipe, PipeTransform } from '@angular/core';
import { IGame } from "../interfaces/game";

@Pipe({ name: 'scoreFilter', pure: false })
export class scoreFilterPipe implements PipeTransform {
  transform(value: IGame[], score: number): IGame[] {
    if(!score) {
      return value;
    }
    return value.filter((data: IGame) => data.rating >= score);
  }
}
