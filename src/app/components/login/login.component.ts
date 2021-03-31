import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  createLoginForm(){

  }

}