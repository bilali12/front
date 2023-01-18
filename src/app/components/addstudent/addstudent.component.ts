import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {
  constructor(private service: StudentService, private router: Router) { }
  data: any

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    pNo: new FormControl('', [Validators.required]),
  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.addStudent(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/']);
  }
}
