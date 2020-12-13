import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucaoFiscoComponent } from './evolucao-fisco.component';

describe('EvolucaoFiscoComponent', () => {
  let component: EvolucaoFiscoComponent;
  let fixture: ComponentFixture<EvolucaoFiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolucaoFiscoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolucaoFiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
