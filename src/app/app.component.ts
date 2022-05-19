import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Coffee} from './coffee';
import {CoffeeEntityService} from './coffee-entity.service';
import {selectCoffeeByLowId} from './selectors/coffee.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-data-example';

  entities$: Observable<Coffee[]>;
  filtered: boolean;
  cacheClearingEnabled: boolean;

  constructor(private coffeeEntityService: CoffeeEntityService, private store: Store) {

  }

  ngOnInit(): void {
    console.log('init')
    this.entities$ = this.coffeeEntityService.entities$;
    this.fetchData();
  }

  filterToggled(e): void {
    if (e.target.checked) {
      console.log('filtering...')
      this.entities$ = this.store.pipe(select(selectCoffeeByLowId(5000)))
    } else {
      this.entities$ = this.coffeeEntityService.entities$;
    }
  }

  fetchData(): void {
    if (this.cacheClearingEnabled) {
      this.coffeeEntityService.load();
    } else {
      this.coffeeEntityService.getAll();
    }
  }

}
