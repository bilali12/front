import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './Student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  // Add Student - Create
  addStudent(student: Student){
    return this.http.post<Student>(`${this.url}student/add`, student)
  }

  // Get Students - Read
  getStudents(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'student/all')
  }

  // Get Student by Id - Read
  getStudentById(id: number): Observable<Student>{
    return this.http.get<Student>(`${this.url}student/${id}`)
  }

  // Update student - Update
  updateStudent(id?: number ,student?: any): Observable<any>{
    return this.http.put<any>(`${this.url}update/${id}`, student)
  }

  // Delete Student - Delete
  deleteStudent(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}delete/${id}`)
  }

}

