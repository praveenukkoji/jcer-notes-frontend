import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {

  file_name = "Choose file"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(!Boolean(sessionStorage.getItem("faculty_id"))){
      this.router.navigate(['sign-in']);
    }
  }

  upload(){
    this.file_name = (<HTMLInputElement>document.getElementById("file")).files[0].name;
  }

}
