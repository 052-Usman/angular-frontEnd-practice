import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  name: string | undefined;
  email: string | undefined;
  age: string | undefined;

  onSubmitCheck: boolean = false;

  userProfileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
  });
  
  userArray: Array<{ name: string, email: string, age: string }> = Array();

  onSubmit() {
    // console.log('Name: ' + this.userProfileForm.value['name']);
    // console.log('Email: ' + this.userProfileForm.value['email']);
    // console.log('Age: ' + this.userProfileForm.value['age']);

    const obj = {
      name: this.userProfileForm.value['name']!, email: this.userProfileForm.value['email']!,
      age: this.userProfileForm.value['age']!
    };
    this.userArray.push(obj);

    //console.warn(this.userArray);

    this.onSubmitCheck = true;

    // this.name = 'Name: ' + this.userProfileForm.value['name'];
    // this.email = 'Eamil: ' + this.userProfileForm.value['email'];
    // this.age = 'Age: ' + this.userProfileForm.value['age'];

    // console.warn(this.userProfileForm.value);

    this.userProfileForm.reset();

  }
}
