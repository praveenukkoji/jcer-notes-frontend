import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.scss']
})
export class AddBranchComponent implements OnInit {

  branchList: any = [];
  message: string = "";
  id: string = '';

  constructor(
    private router: Router,
    private service: ServiceService
  ) { }

  ngOnInit() {
    if(!Boolean(sessionStorage.getItem("faculty_id"))){
      this.router.navigate(['sign-in']);
    }

    this.service.getBranches().subscribe(
      response => {
        this.branchList = response["payload"];
      }
    );
  }

  addBranch(){
    var branch_name = (<HTMLInputElement>document.getElementById("branch_name")).value;
    if(branch_name.length > 0){
      this.message = "";
      this.service.addBranches(branch_name).subscribe(
        response => {
          alert(response["payload"][0]["message"]);

          this.service.getBranches().subscribe(
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

  setid(id){
    this.id = id;
  }

  deleteBranch(){
    this.service.deleteBranches(this.id).subscribe();
    alert("Deleted Successfully");
    this.service.getBranches().subscribe(
      response => {
        this.branchList = response["payload"];
      }
    );
  }

}
