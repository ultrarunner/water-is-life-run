import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherunComponent } from './therun.component';

describe('TherunComponent', () => {
  let component: TherunComponent;
  let fixture: ComponentFixture<TherunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
