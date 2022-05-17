import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { CoffeeDataService } from './store/coffee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-data-example';

  constructor(private coffeeService: CoffeeDataService, private store: Store) {



  }
  ngOnInit(): void {
    console.log('read data...')
    this.coffeeService.getAll().subscribe((v) => console.log(JSON.stringify(v)));


  }

}
