import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HopitraditionComponent } from './hopitradition.component';

describe('HopitraditionComponent', () => {
  let component: HopitraditionComponent;
  let fixture: ComponentFixture<HopitraditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HopitraditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HopitraditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
