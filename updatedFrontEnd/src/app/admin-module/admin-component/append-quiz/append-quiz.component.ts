import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { elementAt } from 'rxjs';
import { QuizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'app-append-quiz',
  templateUrl: './append-quiz.component.html',
  styleUrls: ['./append-quiz.component.css']
})
export class AppendQuizComponent {

  organizationName = ["ecat", "net"];
  subjectName = [];
  setNumber = [];
  questionObjectentity: FormGroup | any;


  constructor(
    private _quizeServie: QuizService,
    private fb: FormBuilder
  ) { this.buildForm() }


  buildForm() {
    this.questionObjectentity = this.fb.group({
      subject: ['', Validators.required],
      organization: ['', Validators.required],
      setName: ['', Validators.required],
      description: ['', Validators.required],
      alternatives: this.fb.array([
        this.generateAlternative(),
        this.generateAlternative(),
        this.generateAlternative(),
        this.generateAlternative(),
      ])
    })
  }


  generateAlternative() {
    return this.fb.group({
      text: ['', Validators.required],
      isCorrect: [false]
    })
  }


  submitForm() {
    console.log(this.questionObjectentity.value)
  }


  onChageFetchDataFromDropDown(event: any) {
    let value = event.target.value;
    this._quizeServie.appendquiz(value).subscribe((res: any) => {
      const mySubjectNameArr = res.Result[0].quize.map((element: any) => element.subject);
      this.subjectName = mySubjectNameArr;
      console.log(mySubjectNameArr); // check the contents of myarr
      const mySetNumber = res.Result[0].quize.map((item: any) => item.setName);
      this.setNumber = mySetNumber;
      console.log(mySetNumber)
    });
  }
  

}
