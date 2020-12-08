import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsEpioneComponent } from './forms-epione.component';

describe('FormsEpioneComponent', () => {
  let component: FormsEpioneComponent;
  let fixture: ComponentFixture<FormsEpioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsEpioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsEpioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
