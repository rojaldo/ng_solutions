import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  result: any;
  resolved = false;

  constructor(private service: BeersService) { }

  ngOnInit() {
    this.resolved = false;
    this.service.getRequest().subscribe(
      (data) => this.processResult(data),
      (error) => this.processError(error));
  }

  processResult(data: any) {
    this.result = data;
    this.resolved = true;
  }

  processError(error: any) {
    console.log(error);
  }

}
