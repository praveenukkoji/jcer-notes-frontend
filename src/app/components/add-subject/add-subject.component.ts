import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {
  
  // variables
  subjectList: any = [];
  branchList: any = [];
  message: string = "";
  id: string = '';

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

    // get all subject service call
    this.service.getSubjects().subscribe(
      response => {
        this.subjectList = response["payload"];
      }
    );
  }

  // add subject
  addSubject(){
    var subject_name = (<HTMLInputElement>document.getElementById("subject_name")).value;
    var subject_code = (<HTMLInputElement>document.getElementById("subject_code")).value;
    var branch = (<HTMLSelectElement>document.getElementById("branch")).value;
    var year = (<HTMLSelectElement>document.getElementById("year")).value;
    var sem = (<HTMLSelectElement>document.getElementById("sem")).value;

    for(var i=0;i<this.branchList.length;i++){
      if(this.branchList[i]["branch_name"] == branch)
        var branch_id = this.branchList[i]["branch_id"] ;
    }

    // validation
    if(subject_name.length == 0){
      this.message = "Subject name required."
      return 0;
    }

    if(subject_code.length == 0){
      this.message = "Subject code required."
      return 0;
    }

    this.message = "";

    // create subject service call
    this.service.createSubjects(subject_name, subject_code, branch_id, year, sem).subscribe(
      response => {
        alert(response["payload"][0]["message"]);
        
        // get all subject service call
        this.service.getSubjects().subscribe(
          response => {
            this.subjectList = response["payload"];
          }
        );

      }
    );
  }

  // set id
  setid(id){
    this.id = id;
  }

  // delete subject
  deleteSubject(){

    // delete subject service call
    this.service.deleteSubjects(this.id).subscribe();
    alert("Deleted Successfully");

    // get all subject service call
    this.service.getSubjects().subscribe(
      response => {
        this.subjectList = response["payload"];
      }
    );
  }
}
