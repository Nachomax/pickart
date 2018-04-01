import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorimgComponent } from './visorimg.component';

describe('VisorimgComponent', () => {
  let component: VisorimgComponent;
  let fixture: ComponentFixture<VisorimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisorimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisorimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
