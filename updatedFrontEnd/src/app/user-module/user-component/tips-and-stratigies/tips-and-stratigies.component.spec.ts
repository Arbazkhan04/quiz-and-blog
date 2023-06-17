import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsAndStratigiesComponent } from './tips-and-stratigies.component';

describe('TipsAndStratigiesComponent', () => {
  let component: TipsAndStratigiesComponent;
  let fixture: ComponentFixture<TipsAndStratigiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsAndStratigiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipsAndStratigiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
