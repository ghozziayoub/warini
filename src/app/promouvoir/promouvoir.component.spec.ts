import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromouvoirComponent } from './promouvoir.component';

describe('PromouvoirComponent', () => {
  let component: PromouvoirComponent;
  let fixture: ComponentFixture<PromouvoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromouvoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromouvoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
