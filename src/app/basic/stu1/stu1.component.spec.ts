import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stu1Component } from './stu1.component';

describe('Stu1Component', () => {
  let component: Stu1Component;
  let fixture: ComponentFixture<Stu1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stu1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
