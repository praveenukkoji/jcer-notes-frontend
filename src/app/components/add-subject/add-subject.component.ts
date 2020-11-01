import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {
  
  subjectList: any = [];
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

    this.service.getSubjects().subscribe(
      response => {
        this.subjectList = response["payload"];
      }
    );
  }

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

    if(subject_name.length == 0){
      this.message = "Subject name required."
      return 0;
    }

    if(subject_code.length == 0){
      this.message = "Subject code required."
      return 0;
    }

    this.message = "";

    this.service.addSubjects(subject_name, subject_code, branch_id, year, sem).subscribe(
      response => {
        alert(response["payload"][0]["message"]);
        
        this.service.getSubjects().subscribe(
          response => {
            this.subjectList = response["payload"];
          }
        );
      }
    );
  }

  setid(id){
    this.id = id;
  }

  deleteSubject(){
    this.service.deleteSubjects(this.id).subscribe();
    alert("Deleted Successfully");
    this.service.getSubjects().subscribe(
      response => {
        this.subjectList = response["payload"];
      }
    );
  }

}
