import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectDefaultValue = 'Advanced';
  data = {
    email: '',
    level: '',
    password: ''
  };
  formCompleted = false;


  onSubmitForm(form: NgForm) {
    this.data.email = form.value.email;
    this.data.level = form.value.level;
    this.data.password = form.value.password;
    this.formCompleted = true;
    console.log(this.data);
  }
}
