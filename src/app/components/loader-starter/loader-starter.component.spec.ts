import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderStarterComponent } from './loader-starter.component';

describe('LoaderStarterComponent', () => {
  let component: LoaderStarterComponent;
  let fixture: ComponentFixture<LoaderStarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderStarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
