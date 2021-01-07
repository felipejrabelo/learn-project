import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaInfoComponent } from './minha-info.component';

describe('MinhaInfoComponent', () => {
  let component: MinhaInfoComponent;
  let fixture: ComponentFixture<MinhaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
