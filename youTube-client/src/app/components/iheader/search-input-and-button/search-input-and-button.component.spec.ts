import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputAndButtonComponent } from './search-input-and-button.component';

describe('SearchInputAndButtonComponent', () => {
  let component: SearchInputAndButtonComponent;
  let fixture: ComponentFixture<SearchInputAndButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInputAndButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputAndButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
