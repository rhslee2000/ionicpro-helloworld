import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VibeFormComponent } from './vibe-form.component';

describe('VibeFormComponent', () => {
  let component: VibeFormComponent;
  let fixture: ComponentFixture<VibeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VibeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VibeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
