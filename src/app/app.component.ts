import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JCER NOTES';
  faculty_name = ''

  LoggedIn = false;

  constructor(
    private router : Router,
    private service: ServiceService
  ) { }

  ngOnInit() {
    this.LoggedIn = Boolean(sessionStorage.getItem("faculty_id"));

    var faculty_id = sessionStorage.getItem("faculty_id");

    this.service.getFaculty(faculty_id).subscribe(
      response => {
        this.faculty_name = response["payload"][0]["name"];
      }
    );
  }

  delacc(){
    var faculty_id = sessionStorage.getItem("faculty_id");
    this.service.deleteFaculty(faculty_id).subscribe();
    this.logout();
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['home'])
      .then(() => {
        window.location.reload();
      });
  }
}
