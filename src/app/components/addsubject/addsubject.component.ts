import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/subject.service';

@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent {
  constructor(private service: SubjectService, private router: Router) { }
  data: any

  form = new FormGroup({
    name: new FormControl('', [Validators.required])

  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.addSubject(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['student/all']);
  }
}
