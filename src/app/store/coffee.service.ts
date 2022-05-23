import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  EntityCollectionDataService,
  DefaultDataService,
  HttpUrlGenerator,
  Logger,
  QueryParams
} from '@ngrx/data';

import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Coffee } from '../coffee';

@Injectable()
export class CoffeeDataService extends DefaultDataService<Coffee> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, logger: Logger) {
    super('Coffee', http, httpUrlGenerator);
    console.log('Created custom Hero EntityDataService');
  }

  getAll(): Observable<Coffee[]> {
    console.log('lets fetch...')
    return this.http.get<Coffee[]>('https://random-data-api.com/api/coffee/random_coffee?size=10').pipe(
      map((res: any) => res)
    );
  }

  load(): Observable<Coffee[]> {
    console.log('lets fetch...')
    return this.http.get<Coffee[]>('https://random-data-api.com/api/coffee/random_coffee?size=10');
  }

  add(entity: Coffee): Observable<Coffee> {
    return this.http.post<Coffee>('https://enfl02znronrg.x.pipedream.net', entity).pipe(
      switchMap(e => of({ ...entity, id: 888 }))
    );

    //Check requests at: https://requestbin.com/r/enfl02znronrg
  }


}