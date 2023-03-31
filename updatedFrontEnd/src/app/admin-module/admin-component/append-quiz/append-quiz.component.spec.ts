import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppendQuizComponent } from './append-quiz.component';

describe('AppendQuizComponent', () => {
  let component: AppendQuizComponent;
  let fixture: ComponentFixture<AppendQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppendQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppendQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
