import { Component } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent {
  students: any[] | undefined
  url: string = "http://localhost:8080/";

  constructor(private service: StudentService, private router: Router) {

  }

  ngOnInit(): void {
    this.service.getStudents().subscribe(data => {
      this.students = data;
    })
  }

  deleteStudent(id: number){
    this.service.deleteStudent(id).subscribe(data => {
      this.students = this.students?.filter(student => student.id !== id);
    })

      setTimeout(()=>{
        window.location.reload();
      }, 100);

  }

  updateStudent(id: number){
    this.router.navigate(['student/update', id]);
  }

}
