import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenioSassepeComponent } from './convenio-sassepe.component';

describe('ConvenioSassepeComponent', () => {
  let component: ConvenioSassepeComponent;
  let fixture: ComponentFixture<ConvenioSassepeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvenioSassepeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvenioSassepeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
