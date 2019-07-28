import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RigthbarComponent } from './rigthbar.component';

describe('RigthbarComponent', () => {
  let component: RigthbarComponent;
  let fixture: ComponentFixture<RigthbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RigthbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RigthbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
