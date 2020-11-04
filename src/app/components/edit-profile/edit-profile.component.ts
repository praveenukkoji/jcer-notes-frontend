import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  // variables
  branchList: any = [];
  message: string = '';

  constructor(
    private router: Router,
    private service: ServiceService
  ) { }

  ngOnInit() {
    // logged or not
    if(!Boolean(sessionStorage.getItem("faculty_id"))){
      this.router.navigate(['sign-in']);
    }

    // get branches service call
    this.service.getBranch().subscribe(
      response => {
        this.branchList = response["payload"];
      }
    );

    var faculty_id = sessionStorage.getItem("faculty_id");

    // get faculty service call
    this.service.getFaculty(faculty_id).subscribe(
      response => {
        (<HTMLInputElement>document.getElementById("full_name")).value = response["payload"][0]["name"];
        (<HTMLInputElement>document.getElementById("email")).value = response["payload"][0]["email"];
        (<HTMLSelectElement>document.getElementById("branch_name")).value = response["payload"][0]["branch_name"];
      }
    );
  }

  // save changes
  saveChanges(){
    var full_name = (<HTMLInputElement>document.getElementById("full_name")).value;
    var email = (<HTMLInputElement>document.getElementById("email")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    var branch = (<HTMLInputElement>document.getElementById("branch_name")).value;

    // validation
    if(full_name.length == 0){
      this.message = "Full Name is required"
      return 0;
    }

    if(email.length == 0){
      this.message = "Email is required"
      return 0;
    }

    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
      this.message = "Email is invalid"
      return 0;
    }

    if(password.length < 8 && password.length > 0){
      this.message = "Password sholud be minimun 8 character"
      return 0;
    }

    for(var i=0;i<this.branchList.length;i++){
      if(this.branchList[i]["branch_name"] == branch)
        var branch_id = this.branchList[i]["branch_id"] ;
    }

    this.message = '';

    // with password
    if(password.length){
      var faculty_id = sessionStorage.getItem("faculty_id");

      // update faculty service call
      this.service.updateFaculty(faculty_id, full_name, email, password, branch_id).subscribe(
        response => {
          alert(response["payload"][0]["message"]);

          // get faculty service call
          this.service.getFaculty(faculty_id).subscribe(
            response => {
              (<HTMLInputElement>document.getElementById("full_name")).value = response["payload"][0]["name"];
              (<HTMLInputElement>document.getElementById("email")).value = response["payload"][0]["email"];
              (<HTMLSelectElement>document.getElementById("branch_name")).value = response["payload"][0]["branch_name"];
            }
          );
        }
      );
    }
    // without password
    else{
      var faculty_id = sessionStorage.getItem("faculty_id");

      // update faculty service call
      this.service.updateFaculty1(faculty_id, full_name, email, branch_id).subscribe(
        response => {
          alert(response["payload"][0]["message"]);

          // get faculty service call
          this.service.getFaculty(faculty_id).subscribe(
            response => {
              (<HTMLInputElement>document.getElementById("full_name")).value = response["payload"][0]["name"];
              (<HTMLInputElement>document.getElementById("email")).value = response["payload"][0]["email"];
              (<HTMLSelectElement>document.getElementById("branch_name")).value = response["payload"][0]["branch_name"];
            }
          );
        }
      );
    }
  }
}
