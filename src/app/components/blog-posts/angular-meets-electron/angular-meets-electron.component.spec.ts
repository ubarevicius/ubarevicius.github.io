/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngularMeetsElectronComponent } from './angular-meets-electron.component';

describe('AngularMeetsElectronComponent', () => {
  let component: AngularMeetsElectronComponent;
  let fixture: ComponentFixture<AngularMeetsElectronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMeetsElectronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMeetsElectronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
