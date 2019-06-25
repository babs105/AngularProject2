import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoListComponent } from './meteo-list.component';

describe('MeteoListComponent', () => {
  let component: MeteoListComponent;
  let fixture: ComponentFixture<MeteoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
