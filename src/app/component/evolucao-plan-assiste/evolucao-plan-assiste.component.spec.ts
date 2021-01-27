import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucaoPlanAssisteComponent } from './evolucao-plan-assiste.component';

describe('EvolucaoPlanAssisteComponent', () => {
  let component: EvolucaoPlanAssisteComponent;
  let fixture: ComponentFixture<EvolucaoPlanAssisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolucaoPlanAssisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolucaoPlanAssisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
