import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenioFiscoComponent } from './convenio-fisco.component';

describe('ConvenioFiscoComponent', () => {
  let component: ConvenioFiscoComponent;
  let fixture: ComponentFixture<ConvenioFiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvenioFiscoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvenioFiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
