import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuTissComponent } from './meu-tiss.component';

describe('MeuTissComponent', () => {
  let component: MeuTissComponent;
  let fixture: ComponentFixture<MeuTissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuTissComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuTissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
