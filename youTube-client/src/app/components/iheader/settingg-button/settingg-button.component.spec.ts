import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettinggButtonComponent } from './settingg-button.component';

describe('SettinggButtonComponent', () => {
  let component: SettinggButtonComponent;
  let fixture: ComponentFixture<SettinggButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettinggButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettinggButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
