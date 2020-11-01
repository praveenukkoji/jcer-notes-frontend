import { Injectable } from '@angular/core';
import { Response } from '../model/Response'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // branch

  getBranches(): Observable<Response>{
    const url = "http://localhost:8000/branch/get/branches/";

    var body = {
      "branches": []
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }

  addBranches(branch_name): Observable<Response>{
    const url = "http://localhost:8000/branch/create/branches/";

    var body = {
      "branches": [
        {
          "branch_name": branch_name
        }
      ]
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }

  deleteBranches(branch_id): Observable<Response>{
    const url = "http://localhost:8000/branch/delete/branches/";

    var body = {
      "branches": [branch_id]
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }

  // subject


  getSubjects(): Observable<Response>{
    const url = "http://localhost:8000/subject/get/subjects/";

    var body = {
      "subjects": []
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }

  addSubjects(subject_name, subject_code, branch_id, year, sem): Observable<Response>{
    const url = "http://localhost:8000/subject/create/subjects/";

    var body = {
      "subjects": [
        {
          "subject_name": subject_name,
          "subject_code": subject_code,
          "branch_id": branch_id,
          "year": year,
          "sem": sem
        }
      ]
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }

  deleteSubjects(subject_id): Observable<Response>{
    const url = "http://localhost:8000/subject/delete/subjects/";

    var body = {
      "subjects": [subject_id]
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }

  // faculty

  facultyLogin(email, password): Observable<Response>{
    const url = "http://localhost:8000/user/login/faculties/";

    var body = {
      "faculty": [
        {
          "email": email,
          "password": password
        }
      ]
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }

  getFaculty(faculty_id): Observable<Response>{
    const url = "http://localhost:8000/user/get/faculties/";

    var body = {
      "faculties": [faculty_id]
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }

  createFaculty(full_name, email, password, branch_id): Observable<Response>{
    const url = "http://localhost:8000/user/create/faculties/";

    var body = {
      "faculties": [
        {
          "name": full_name,
          "email": email,
          "password": password,
          "branch_id": branch_id
        }
      ]
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }

  // password
  updateFaculty(faculty_id, full_name, email, password, branch_id): Observable<Response>{
    const url = "http://localhost:8000/user/update/faculties/";

    var body = {
      "faculties": [
        {
          "faculty_id": faculty_id,
          "update_data":{
            "name": full_name,
            "email": email,
            "password": password,
            "branch_id": branch_id
          }
        }
      ]
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }

  updateFaculty1(faculty_id, full_name, email, branch_id): Observable<Response>{
    const url = "http://localhost:8000/user/update/faculties/";

    var body = {
      "faculties": [
        {
          "faculty_id": faculty_id,
          "update_data":{
            "name": full_name,
            "email": email,
            "branch_id": branch_id
          }
        }
      ]
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }

  deleteFaculty(faculty_id): Observable<Response>{
    const url = "http://localhost:8000/user/delete/faculties/";

    var body = {
      "faculties": [faculty_id]
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }
}
