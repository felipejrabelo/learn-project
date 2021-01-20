import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoConvenioComponent } from './selecao-convenio.component';

describe('SelecaoConvenioComponent', () => {
  let component: SelecaoConvenioComponent;
  let fixture: ComponentFixture<SelecaoConvenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecaoConvenioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecaoConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
