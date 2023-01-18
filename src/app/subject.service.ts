import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from './Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private url = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  // Add Subject - Create
  addSubject(subject: Subject){
    return this.http.post<Subject>(`${this.url}subject/add`, subject)
  }

  // Get subjects - Read
  getSubjects(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'subject/all')
  }

  
}
