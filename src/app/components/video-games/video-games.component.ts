import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

import { IGame } from './interfaces/game';
import { SortCriteria } from "./interfaces/sort-criteria";
import { DataService } from "../../services/data.service";
import { ORDER_PARAMETERS } from "./constants/constants";
import { OrderParameters } from "./enums/enum";

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.scss']
})
export class VideoGamesComponent implements OnInit {
  public parameters = ORDER_PARAMETERS;
  public sortParameter = '';
  public isAscending = false;
  public sortingForm: FormGroup;
  public criteria: SortCriteria;
  public data$: Observable<IGame[]> = this.dataService.getData();

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {
    this.sortingForm = this.fb.group(
      {
        name: [''],
        score: [''],
        parameter: ['']
      })

  }

  public setSortingCriteria(): void {
    this.criteria = {
      property: this.sortParameter,
      descending: !this.isAscending
    };
  }

  public toggleOrder() {
    this.isAscending = !this.isAscending;
    this.setSortingCriteria();
  }

  public clearForm() {
    this.sortingForm.patchValue({name: '', score: '', parameter: ''})
    this.isAscending = false;
    this.sortParameter = ''
    this.setSortingCriteria();
  }

  public setParameter() {
    if (this.sortingForm.controls['parameter'].value === OrderParameters.ReleaseDate) {
      this.sortParameter = 'first_release_date'
    } else if (this.sortingForm.controls['parameter'].value === OrderParameters.Score) {
      this.sortParameter = 'rating'
    } else {
      this.sortParameter = this.sortingForm.controls['parameter'].value.toLowerCase()
    }
    this.setSortingCriteria();
  }
}
