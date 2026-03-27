import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html'
})
export class App {

  name = '';
  age = '';
  email = '';
  course = '';

  students: any[] = []; 

  ngOnInit() {
    const data = localStorage.getItem('students');
    if (data) {
      this.students = JSON.parse(data);
    }
  }

  submit() {
    const newStudent = {
      name: this.name,
      age: this.age,
      email: this.email,
      course: this.course
    };

    this.students.push(newStudent);


    localStorage.setItem('students', JSON.stringify(this.students));


    this.name = '';
    this.age = '';
    this.email = '';
    this.course = '';
  }
}
