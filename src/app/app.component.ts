import { Component, OnInit } from '@angular/core';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { Coffee } from './coffee';
import { CoffeeDataService } from './store/coffee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-data-example';
  coffeeService: EntityCollectionService<Coffee>;

  constructor(private factory: EntityCollectionServiceFactory, private store: Store) {
    this.coffeeService = factory.create<Coffee>('Coffee');

  }
  ngOnInit(): void {
    console.log('read data...')
    this.coffeeService.getAll().subscribe((v) => console.log(JSON.stringify(v)));


  }

}
