import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsignbtnComponent } from './logsignbtn.component';

describe('LogsignbtnComponent', () => {
  let component: LogsignbtnComponent;
  let fixture: ComponentFixture<LogsignbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsignbtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogsignbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
