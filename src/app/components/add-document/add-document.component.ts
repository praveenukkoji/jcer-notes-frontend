import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {

  file_name = "Choose file"

  constructor() { }

  ngOnInit() {
  }

  upload(){
    this.file_name = (<HTMLInputElement>document.getElementById("file")).files[0].name;
  }

}
