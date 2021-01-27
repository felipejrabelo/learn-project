import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucaoGeapComponent } from './evolucao-geap.component';

describe('EvolucaoGeapComponent', () => {
  let component: EvolucaoGeapComponent;
  let fixture: ComponentFixture<EvolucaoGeapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolucaoGeapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolucaoGeapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
