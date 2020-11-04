import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {

  // variables
  file_name = "Choose file"
  documentList: any = [];
  branchList: any = [];
  subjectList: any = [];

  message: string = "";
  id: string = "";

  branch_id: string = "";
  branch_name: string = "Choose";
  subject_name: string = "Choose";
  subject_id: string = "";
  module: string = "1";

  constructor(
    private router: Router,
    private service: ServiceService
  ) { }

  ngOnInit() {
    // logged or not
    if(!Boolean(sessionStorage.getItem("faculty_id"))){
      this.router.navigate(['sign-in']);
    }

    // get branch service call
    this.service.getBranch().subscribe(
      response => {
        this.branchList = response["payload"];
        this.branch_name = this.branchList[0]["branch_name"];

        // subject by branch_id
        this.service.getSubjectBranch(this.branchList[0]["branch_id"]).subscribe(
          response => {
            this.subjectList = response["payload"];
          }
        );
      }
    );

    // get document service call
    this.service.getDocuments().subscribe(
      response => {
        this.documentList = response["payload"];
      }
    );
  }

  // change branch
  changeBranch(branch_id){
    this.branch_id = branch_id;
    for(var i=0;i<this.branchList.length;i++){
      if(this.branchList[i]["branch_id"] == branch_id)
        this.branch_name = this.branchList[i]["branch_name"] ;
     }

     this.subjectList = [];
     this.subject_name = "Choose";
     this.subject_id = "";

     // subject by branch_id
     this.service.getSubjectBranch(branch_id).subscribe(
      response => {
        this.subjectList = response["payload"];
      }
    );
  }

  // change subject
  changeSubject(subject_id){
    this.subject_id = subject_id;
    for(var i=0;i<this.subjectList.length;i++){
      if(this.subjectList[i]["subject_id"] == subject_id)
        this.subject_name = this.subjectList[i]["subject_name"] ;
     }
  }

  // change module
  changeModule(module_){
    this.module = module_;
  }

  // upload 
  upload(){
    this.file_name = (<HTMLInputElement>document.getElementById("file")).files[0].name;
  }

  // add document
  addDocument(){
   var document_title = (<HTMLInputElement>document.getElementById("document_title")).value;
   var file = (<HTMLInputElement>document.getElementById("file")).files[0];

  // validation
   if(document_title.length == 0){
     this.message = "Document title required";
     return 0;
   }

   if(!file){
    this.message = "File required"
    return 0;
   }

   if(this.branch_name == "Choose"){
    this.message = "Branch required";
    return 0;
    }

   if(this.subject_name == "Choose"){
    this.message = "Subject required";
    return 0;
    }

   this.message = "";

   var id = uuid();
   var name = id+"."+file.name.split('.')[1];

   const formData = new FormData();
   formData.append('document', file);
   formData.append('document_name', name);

  // upload document service call
   this.service.uploadDocument(formData).subscribe(
     response => {

      // URL
       var url = "http://localhost:8000/media/"+name;

       if(response["message"] == "Document uploaded successfully."){
        //  create document
        this.service.createDocument(document_title, url, this.subject_id, this.module).subscribe(
          response => {
            alert(response["payload"][0]["message"]);

            // get document service call
            this.service.getDocuments().subscribe(
              response => {
                this.documentList = response["payload"];
              }
            );
          }
        );
       }
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
