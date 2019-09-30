import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss']
})
export class BeersListComponent implements OnInit {
  @Input() beers: any[] = [];
  constructor() { }

  ngOnInit() {
  }

}
