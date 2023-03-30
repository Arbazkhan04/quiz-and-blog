import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  questionForm: FormGroup|any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.questionForm = this.fb.group({
      quize: this.fb.array([
        this.fb.group({
          subject: ['', Validators.required],
          organization: ['', Validators.required],
          setName: ['', Validators.required],
          description: ['', Validators.required],
          alternatives: this.fb.array([
            this.generateAlternative(),
            this.generateAlternative(),
            this.generateAlternative(),
            this.generateAlternative()
          ])
        })
      ])
    });
    console.log(this.questionForm.value)
  }

  generateAlternative() {
    return this.fb.group({
      text: ['', Validators.required],
      isCorrect: [false]
    });
  }

  
}
