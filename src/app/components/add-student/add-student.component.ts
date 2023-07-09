import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  constructor(private students: StudentsService) {}
  addStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });
  message: boolean = false;
  saveData() {
    this.students
      .saveStudentData(this.addStudent.value)
      .subscribe((res: any) => {
        // console.warn(res);
        this.message = true;
        this.addStudent.reset({});
      });
  }
  removeMessage() {
    this.message = false;
  }
}
