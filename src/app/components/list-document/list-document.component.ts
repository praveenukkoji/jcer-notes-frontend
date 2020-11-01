import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.scss']
})
export class ListDocumentComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(!Boolean(sessionStorage.getItem("faculty_id"))){
      this.router.navigate(['sign-in']);
    }
  }

}
