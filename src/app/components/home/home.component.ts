import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // variable
  branchList: any = [];

  constructor(
    private router: Router,
    private service: ServiceService
  ) { }

  ngOnInit() {
    // get branch service call
    this.service.getBranch().subscribe(
      response => {
        this.branchList = response["payload"];
      }
    );
  }

  // change branch
  changeBranch(id){
    sessionStorage.setItem("branch_id", id);
  }
}
