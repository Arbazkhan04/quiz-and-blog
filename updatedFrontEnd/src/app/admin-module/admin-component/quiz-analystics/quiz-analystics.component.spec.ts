import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAnalysticsComponent } from './quiz-analystics.component';

describe('QuizAnalysticsComponent', () => {
  let component: QuizAnalysticsComponent;
  let fixture: ComponentFixture<QuizAnalysticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizAnalysticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizAnalysticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
