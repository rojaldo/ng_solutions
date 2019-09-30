import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  result: any;
  beers: any[] = [];
  resolved = false;
  highValue = 5;
  value = 0;
  options: Options = {
    floor: 0,
    ceil: 60
  };

  constructor(public service: BeersService) { }

  ngOnInit() {
    this.resolved = false;
    this.service.getRequest().subscribe(
      (data) => this.processResult(data),
      (error) => this.processError(error));
  }

  processResult(data: any) {
    this.result = data;
    // this.filterBeers();
    this.beers = this.result;
    this.resolved = true;
  }

  filterBeers(): void {
    this.beers = [];
    for (const beer of this.result) {
      if(beer.abv >= this.value && beer.abv <= this.highValue) {
        this.beers.push(beer);
      }
    }
  }

  processError(error: any) {
    console.log(error);
  }

}
