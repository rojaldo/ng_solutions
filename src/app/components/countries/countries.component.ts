import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Observable } from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  resolved = false;
  result = [];
  countryName = '';
  capitalName = '';
  countries: string[] = [];

  constructor(private service: CountriesService, private router: Router) { }

  ngOnInit() {
    this.resolved = false;
    this.service.getRequest().subscribe(
      (data) => this.processResult(data),
      (error) => this.processError(error));
  }

  handleClick() {
    this.router.navigate(['calculator']);
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

  handleKey() {
    for (const country of this.result) {
      if(country.name === this.countryName){
        this.capitalName = country.capital;
        break;
      }
    }
  }

  search = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 2 ? []
      : this.countries.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )


}
