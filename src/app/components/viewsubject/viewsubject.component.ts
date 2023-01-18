import { Component } from '@angular/core';
import { SubjectService } from 'src/app/subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewsubject',
  templateUrl: './viewsubject.component.html',
  styleUrls: ['./viewsubject.component.css']
})
export class ViewsubjectComponent {
  subjects: any[] | undefined
  url: string = "http://localhost:8080/";

  constructor(private service: SubjectService, private router: Router) {

  }

  ngOnInit(): void {
    this.service.getSubjects().subscribe(data => {
      this.subjects = data;
    })
  }


}
