import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.scss']
})
export class AddBranchComponent implements OnInit {

  // variables
  branchList: any = [];
  message: string = "";
  id: string = "";

  constructor(
    private router: Router,
    private service: ServiceService
  ) { }

  ngOnInit() {
    // logged or not
    if(!Boolean(sessionStorage.getItem("faculty_id"))){
      this.router.navigate(['sign-in']);
    }

    // get all branch service call
    this.service.getBranch().subscribe(
      response => {
        this.branchList = response["payload"];
      }
    );
  }

  // add branch
  addBranch(){
    var branch_name = (<HTMLInputElement>document.getElementById("branch_name")).value;
    if(branch_name.length > 0){
      this.message = "";

      // create branch service call
      this.service.createBranch(branch_name).subscribe(
        response => {
          alert(response["payload"][0]["message"]);

          // get all branch service call
          this.service.getBranch().subscribe(
            response => {
              this.branchList = response["payload"];
            }
          );
        }
      );
    }
    else{
      this.message = "Branch name required.";
    }
  }

  // set id
  setid(id){
    this.id = id;
  }

  // delete branch
  deleteBranch(){

    // delete branch service call
    this.service.deleteBranch(this.id).subscribe();
    alert("Deleted Successfully");

    // get all branch service call
    this.service.getBranch().subscribe(
      response => {
        this.branchList = response["payload"];
      }
    );
  }
}
