import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.scss']
})
export class ListDocumentComponent implements OnInit {

  // variables
  subjectList: any = [];
  documentList: any = [];

  id: string = "";
  message: string = "";


  sem: string = "1";
  subject_name : string = "Choose";
  subject_id: string = "";

  constructor(
    private router: Router,
    private service: ServiceService
  ) { }

  ngOnInit() {
    // logged or not
    if(!Boolean(sessionStorage.getItem("faculty_id"))){
      this.router.navigate(['sign-in']);
    }

    var branch_id = sessionStorage.getItem("branch_id");

    // get subject by branch_id and sem
    this.service.getSubjectBranchSem(branch_id, 1).subscribe(
      response => {
        this.subjectList = response["payload"];
      }
    );
  }

  // change Sem
  changeSem(sem){
    this.sem = sem;
    this.subject_name = "Choose";
    this.subjectList = [];

    var branch_id = sessionStorage.getItem("branch_id");

    // get subject by branch_id and sem
    this.service.getSubjectBranchSem(branch_id, sem).subscribe(
      response => {
        this.subjectList = response["payload"];
      }
    );
  }

  // change subject
  changeSub(subject_id){
    this.subject_id = subject_id;
    for(var i=0;i<this.subjectList.length;i++){
      if(this.subjectList[i]["subject_id"] == subject_id)
        this.subject_name = this.subjectList[i]["subject_name"] ;
     }
  }

  // apply
  apply(){
    // validation
    if(this.subject_name == "Choose"){
      this.message = "Subject required";
      return 0;
      }

      this.message = "";

    // get document by subject_id
    this.service.getDocumentsSubject(this.subject_id).subscribe(
      response => {
        this.documentList = response["payload"];
      }
    );
  }

  // set id
  setid(id){
    this.id = id;
  }

  // delete id
  deleteDocument(){
    this.service.deleteDocuments(this.id).subscribe();
    alert("Deleted Successfully");
    this.service.getDocuments().subscribe(
      response => {
        this.documentList = response["payload"];
      }
    );
  }
}
