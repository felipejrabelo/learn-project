import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenioTrtSaudeComponent } from './convenio-trt-saude.component';

describe('ConvenioTrtSaudeComponent', () => {
  let component: ConvenioTrtSaudeComponent;
  let fixture: ComponentFixture<ConvenioTrtSaudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvenioTrtSaudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvenioTrtSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
