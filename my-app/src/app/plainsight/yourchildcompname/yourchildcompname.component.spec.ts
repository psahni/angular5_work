import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourchildcompnameComponent } from './yourchildcompname.component';

describe('YourchildcompnameComponent', () => {
  let component: YourchildcompnameComponent;
  let fixture: ComponentFixture<YourchildcompnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourchildcompnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourchildcompnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
