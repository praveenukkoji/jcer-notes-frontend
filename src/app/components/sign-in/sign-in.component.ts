import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  message: string = "";

  constructor(
    private router: Router,
    private service: ServiceService
  ) { }

  ngOnInit() {
  }

  signin(){
    var email = (<HTMLInputElement>document.getElementById("email")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;

    if(email.length == 0){
      this.message = "Email is required"
      return 0;
    }

    if(password.length == 0){
      this.message = "Password is required"
      return 0;
    }

    this.service.facultyLogin(email, password).subscribe(
      response => {
        this.message = '';
        if(response["payload"]){
          sessionStorage.setItem("faculty_id", response["payload"][0]["faculty_id"]);
          this.router.navigate(['home'])
            .then(() => {
              window.location.reload();
            });
        }
        else{
          this.message = response["message"];
        }
      }
    );
  }

}
