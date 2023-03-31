import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }
  createQuiz(payload:any)
  {
    return this.http.post('http://localhost:4441/quizMangementRouter/quiz',payload)
  }
  appendquiz(organzantionName:string)
  {
    return this.http.get(`http://localhost:4441/quizMangementRouter/getQuestionByOrganztionName${organzantionName}`)
  }
}