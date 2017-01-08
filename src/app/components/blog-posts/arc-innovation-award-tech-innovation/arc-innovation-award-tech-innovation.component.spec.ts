/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArcInnovationAwardTechInnovationComponent } from './arc-innovation-award-tech-innovation.component';

describe('ArcInnovationAwardTechInnovationComponent', () => {
  let component: ArcInnovationAwardTechInnovationComponent;
  let fixture: ComponentFixture<ArcInnovationAwardTechInnovationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcInnovationAwardTechInnovationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcInnovationAwardTechInnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
