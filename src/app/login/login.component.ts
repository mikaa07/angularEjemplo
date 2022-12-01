import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  
  constructor() { }

  login(){
    alert("te logueaste con exito " + this.email);
    
    //console.log(this.email);
    //console.log(this.password);
  }

  ngOnInit(): void {
  }

}
