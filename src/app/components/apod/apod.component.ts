import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  date: any;
  yearArray: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  selectDate() {
    this.yearArray = [];
    for (let year = 2018; year > 1995; year--) {
      this.yearArray.push({year: year, month: this.date.month, day: this.date.day})  
    }
  }

}
