import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucaoSassepeComponent } from './evolucao-sassepe.component';

describe('EvolucaoSassepeComponent', () => {
  let component: EvolucaoSassepeComponent;
  let fixture: ComponentFixture<EvolucaoSassepeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolucaoSassepeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolucaoSassepeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
