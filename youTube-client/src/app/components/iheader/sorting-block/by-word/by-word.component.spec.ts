import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByWordComponent } from './by-word.component';

describe('ByWordComponent', () => {
  let component: ByWordComponent;
  let fixture: ComponentFixture<ByWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
