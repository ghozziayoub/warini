import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutContenuComponent } from './ajout-contenu.component';

describe('AjoutContenuComponent', () => {
  let component: AjoutContenuComponent;
  let fixture: ComponentFixture<AjoutContenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutContenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutContenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
