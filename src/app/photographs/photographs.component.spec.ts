import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographsComponent } from './photographs.component';

describe('PhotographsComponent', () => {
  let component: PhotographsComponent;
  let fixture: ComponentFixture<PhotographsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotographsComponent]
    });
    fixture = TestBed.createComponent(PhotographsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
