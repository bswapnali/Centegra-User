import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseCompareCardComponent } from './warehouse-compare-card.component';

describe('WarehouseCompareCardComponent', () => {
  let component: WarehouseCompareCardComponent;
  let fixture: ComponentFixture<WarehouseCompareCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseCompareCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseCompareCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
