import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadtedUerModuleComponent } from './upadted-uer-module.component';

describe('UpadtedUerModuleComponent', () => {
  let component: UpadtedUerModuleComponent;
  let fixture: ComponentFixture<UpadtedUerModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpadtedUerModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpadtedUerModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
