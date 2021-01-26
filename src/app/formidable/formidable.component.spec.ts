import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormidableComponent } from './formidable.component';

describe('FormidableComponent', () => {
  let component: FormidableComponent;
  let fixture: ComponentFixture<FormidableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormidableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormidableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
