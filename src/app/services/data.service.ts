import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

import {IGame} from "../components/video-games/interfaces/game";

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  public getData(): Observable<IGame[]> {
    const url = 'https://public.connectnow.org.uk/applicant-test/'
    return this.http.get<IGame[]>(url)
  }
}
