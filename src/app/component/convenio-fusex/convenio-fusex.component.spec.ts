import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenioFusexComponent } from './convenio-fusex.component';

describe('ConvenioFusexComponent', () => {
  let component: ConvenioFusexComponent;
  let fixture: ComponentFixture<ConvenioFusexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvenioFusexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvenioFusexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
