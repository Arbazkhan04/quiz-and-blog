import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from 'src/app/shared/Interface/quizInterface';
import { QuizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
    questionForm: FormGroup|any;
  
    constructor(
      private formBuilder: FormBuilder,
      private _createQuizSerice:QuizService
      ) {}
  
    ngOnInit(): void {
      this.questionForm = this.formBuilder.group({
        description: ['', Validators.required],
        alternatives: this.formBuilder.array([
          this.createAlternativeFormGroup(),
          this.createAlternativeFormGroup(),
          this.createAlternativeFormGroup(),
          this.createAlternativeFormGroup(),
        ]),
      });
    }
  
    onSubmit(): void {
      const question: Question = {
        description: this.questionForm.value.description,
        alternatives: this.questionForm.value.alternatives,
        softDelete: 0,
      };
  
      console.log('New question:', question);
      this._createQuizSerice.createQuiz(question).subscribe(((res:any)=>{
        console.log( res.Body);
      }))
    }
  
    private createAlternativeFormGroup(): FormGroup {
      return this.formBuilder.group({
        text: ['', Validators.required],
        isCorrect: [false],
      });
    }
  
  
}
