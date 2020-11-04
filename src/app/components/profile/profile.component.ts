import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private service: ServiceService
    ) { }

  ngOnInit() {
    // logged or not
    if(!Boolean(sessionStorage.getItem("faculty_id"))){
      this.router.navigate(['sign-in']);
    }

    var faculty_id = sessionStorage.getItem("faculty_id");

    // get faculty service call
    this.service.getFaculty(faculty_id).subscribe(
      response => {
        (<HTMLInputElement>document.getElementById("full_name")).value = response["payload"][0]["name"];
        (<HTMLInputElement>document.getElementById("email")).value = response["payload"][0]["email"];
        (<HTMLInputElement>document.getElementById("branch_name")).value = response["payload"][0]["branch_name"];
      }
    );
  }
}
