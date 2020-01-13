import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDisplayerComponent } from './list-displayer.component';

describe('ListDisplayerComponent', () => {
  let component: ListDisplayerComponent;
  let fixture: ComponentFixture<ListDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
