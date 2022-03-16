import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulatioComponent } from './formulatio.component';

describe('FormulatioComponent', () => {
  let component: FormulatioComponent;
  let fixture: ComponentFixture<FormulatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulatioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
