/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GrasshopperComponent } from './async-grasshopper-components.component';

describe('GrasshopperComponent', () => {
  let component: GrasshopperComponent;
  let fixture: ComponentFixture<GrasshopperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrasshopperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrasshopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
