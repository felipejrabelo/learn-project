import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenioGeapComponent } from './convenio-geap.component';

describe('ConvenioGeapComponent', () => {
  let component: ConvenioGeapComponent;
  let fixture: ComponentFixture<ConvenioGeapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvenioGeapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvenioGeapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
