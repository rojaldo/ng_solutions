import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  user: User;
  myregex = /^[a-zA-Z]{2,5}$/;
  constructor() { }
  ngOnInit() {
    this.user = new User('', '', 0, '', '', 0, 0, '', '');
  }
  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
    // user.firstName = form.firstName
  }
}
