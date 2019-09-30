import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Observable } from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  resolved = false;
  result = [];
  countryName = '';
  countries: string[] = [];

  constructor(private service: CountriesService) { }

  ngOnInit() {
    this.resolved = false;
    this.service.getRequest().subscribe(
      (data) => this.processResult(data),
      (error) => this.processError(error));
  }

  processResult(data: any) {
    this.result = data;
    for (const country of data) {
      this.countries.push(country.name)
    }
    this.resolved = true;
  }

  processError(error: any) {
    console.log(error);
  }

  search = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 2 ? []
      : this.countries.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )


}
