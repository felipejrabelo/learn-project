import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucaoTrtComponent } from './evolucao-trt.component';

describe('EvolucaoTrtComponent', () => {
  let component: EvolucaoTrtComponent;
  let fixture: ComponentFixture<EvolucaoTrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolucaoTrtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolucaoTrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
