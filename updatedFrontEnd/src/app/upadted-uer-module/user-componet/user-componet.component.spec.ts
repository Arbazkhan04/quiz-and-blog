import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponetComponent } from './user-componet.component';

describe('UserComponetComponent', () => {
  let component: UserComponetComponent;
  let fixture: ComponentFixture<UserComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
