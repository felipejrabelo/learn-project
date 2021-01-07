import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuEnderecoComponent } from './meu-endereco.component';

describe('MeuEnderecoComponent', () => {
  let component: MeuEnderecoComponent;
  let fixture: ComponentFixture<MeuEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuEnderecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
