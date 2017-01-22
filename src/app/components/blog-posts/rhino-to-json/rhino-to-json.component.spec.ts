/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RhinoToJsonComponent } from './rhino-to-json.component';

describe('RhinoToJsonComponent', () => {
  let component: RhinoToJsonComponent;
  let fixture: ComponentFixture<RhinoToJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhinoToJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhinoToJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
