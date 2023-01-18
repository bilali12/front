import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsubjectComponent } from './viewsubject.component';

describe('ViewsubjectComponent', () => {
  let component: ViewsubjectComponent;
  let fixture: ComponentFixture<ViewsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
