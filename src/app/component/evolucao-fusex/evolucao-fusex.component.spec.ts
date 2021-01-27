import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucaoFusexComponent } from './evolucao-fusex.component';

describe('EvolucaoFusexComponent', () => {
  let component: EvolucaoFusexComponent;
  let fixture: ComponentFixture<EvolucaoFusexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolucaoFusexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolucaoFusexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
