import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      'login': [null, [Validators.required, this.checkLogin]],
      'pass': [null, [Validators.required,this.checkPassword]],
      'validate': ''
    });
  }
  onSubmit(post) {
    this.post = post;
  }
  /*
  let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  */
  checkLogin(control){
    let loginCheck=control.value;
    let regexLogin=/^[ñA-Za-z _]{4,15}/;
    if(!regexLogin.test(loginCheck)){
      return {'requirements': true};
    }else{
      return null;
    }
  }
  checkPassword(control){
    let passCheck=control.value;
    let regexPass=/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
    if(!regexPass.test(passCheck)){
      return {'requirements': true};
    }else{
      return null;
    }
  }
  getErrorPassword() {
    return this.formGroup.get('pass').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
    this.formGroup.get('pass').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';

  }
  getErrorLogin() {}
}
