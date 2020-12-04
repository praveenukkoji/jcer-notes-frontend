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

  // BRANCH

  // get all branches for database
  getBranch(): Observable<Response>{
    // const url = "http://localhost:8000/branch/get/branches/";
    const url = "https://jcer-notes-api.herokuapp.com/branch/get/branches/";

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

  // create branch in database
  createBranch(branch_name): Observable<Response>{
    // const url = "http://localhost:8000/branch/create/branches/";
    const url = "https://jcer-notes-api.herokuapp.com/branch/create/branches/";

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

  // update branch in database

  // delete branch in databse
  deleteBranch(branch_id): Observable<Response>{
    // const url = "http://localhost:8000/branch/delete/branches/";
    const url = "https://jcer-notes-api.herokuapp.com/branch/delete/branches/";

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

  // SUBJECT

  // get all subject
  getSubjects(): Observable<Response>{
    // const url = "http://localhost:8000/subject/get/subjects/";
    const url = "https://jcer-notes-api.herokuapp.com/subject/get/subjects/";

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

  // create subject in database
  createSubjects(subject_name, subject_code, branch_id, year, sem): Observable<Response>{
    // const url = "http://localhost:8000/subject/create/subjects/";
    const url = "https://jcer-notes-api.herokuapp.com/subject/create/subjects/";

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

  // update subjects

  // delete subjects in database
  deleteSubjects(subject_id): Observable<Response>{
    // const url = "http://localhost:8000/subject/delete/subjects/";
    const url = "https://jcer-notes-api.herokuapp.com/subject/delete/subjects/";

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

  // get subjects according to branch
  getSubjectBranch(branch_id): Observable<Response>{
    // const url = "http://localhost:8000/subject/getBid/subjects/";
    const url = "https://jcer-notes-api.herokuapp.com/subject/getBid/subjects/";

    var body = {
      "subjects": [branch_id]
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }

  // get subject according to branch and sem
  getSubjectBranchSem(branch_id, sem): Observable<Response>{
    // const url = "http://localhost:8000/subject/getSem/subjects/";
    const url = "https://jcer-notes-api.herokuapp.com/subject/getSem/subjects/";

    var body = {
      "subjects": [
        {
          "branch_id": branch_id,
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

  // FACULTY

  // get faculty details 
  getFaculty(faculty_id): Observable<Response>{
    // const url = "http://localhost:8000/user/get/faculties/";
    const url = "https://jcer-notes-api.herokuapp.com/user/get/faculties/";

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

  // create faculty
  createFaculty(full_name, email, password): Observable<Response>{
    // const url = "http://localhost:8000/user/create/faculties/";
    const url = "https://jcer-notes-api.herokuapp.com/user/create/faculties/";

    var body = {
      "faculties": [
        {
          "name": full_name,
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

  // update faculty with password
  updateFaculty(faculty_id, full_name, email, password): Observable<Response>{
    // const url = "http://localhost:8000/user/update/faculties/";
    const url = "https://jcer-notes-api.herokuapp.com/user/update/faculties/";

    var body = {
      "faculties": [
        {
          "faculty_id": faculty_id,
          "update_data":{
            "name": full_name,
            "email": email,
            "password": password
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

  // update faculty without password
  updateFaculty1(faculty_id, full_name, email): Observable<Response>{
    // const url = "http://localhost:8000/user/update/faculties/";
    const url = "https://jcer-notes-api.herokuapp.com/user/update/faculties/";

    var body = {
      "faculties": [
        {
          "faculty_id": faculty_id,
          "update_data":{
            "name": full_name,
            "email": email
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

  // delete faculty in database
  deleteFaculty(faculty_id): Observable<Response>{
    // const url = "http://localhost:8000/user/delete/faculties/";
    const url = "https://jcer-notes-api.herokuapp.com/user/delete/faculties/";

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

  // login faculty
  facultyLogin(email, password): Observable<Response>{
    // const url = "http://localhost:8000/user/login/faculties/";
    const url = "https://jcer-notes-api.herokuapp.com/user/login/faculties/";

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

  // DOCUMENT 

  // get all document
  getDocuments(): Observable<Response>{
    // const url = "http://localhost:8000/document/get/document/";
    const url = "https://jcer-notes-api.herokuapp.com/document/get/document/";

    var body = {
      "document": []
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }

  // create document in database
  createDocument(document_title, _url, subject_id, module_no): Observable<Response>{
    // const url = "http://localhost:8000/document/create/document/";
    const url = "https://jcer-notes-api.herokuapp.com/document/create/document/";

    var body = {
      "document": [
        {
          "document_title": document_title,
          "document_url": _url,
          "subject_id": subject_id,
          "module": module_no
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

  // update document

  // delete document in database
  deleteDocuments(document_id): Observable<Response>{
    // const url = "http://localhost:8000/document/delete/document/";
    const url = "https://jcer-notes-api.herokuapp.com/document/delete/document/";

    var body = {
      "document": [document_id]
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }

   // upload document in media folder
   uploadDocument(formData): Observable<Response>{
    // const url = "http://localhost:8000/document/upload/document/";
    const url = "https://jcer-notes-api.herokuapp.com/document/upload/document/";
    
    let httpOptions = {
      headers: new HttpHeaders({
       
      })
    };

    return this.httpClient.post<Response>(url, formData, httpOptions);
  }

  // get document by subject_id
  getDocumentsSubject(id): Observable<Response>{
    // const url = "http://localhost:8000/document/getSid/document/";
    const url = "https://jcer-notes-api.herokuapp.com/document/getSid/document/";

    var body = {
      "document": [id]
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }
}
