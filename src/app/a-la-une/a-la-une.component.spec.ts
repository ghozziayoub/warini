import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ALaUneComponent } from './a-la-une.component';

describe('ALaUneComponent', () => {
  let component: ALaUneComponent;
  let fixture: ComponentFixture<ALaUneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ALaUneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ALaUneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
