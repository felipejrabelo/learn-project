import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenioPlanAssisteComponent } from './convenio-plan-assiste.component';

describe('ConvenioPlanAssisteComponent', () => {
  let component: ConvenioPlanAssisteComponent;
  let fixture: ComponentFixture<ConvenioPlanAssisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvenioPlanAssisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvenioPlanAssisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
