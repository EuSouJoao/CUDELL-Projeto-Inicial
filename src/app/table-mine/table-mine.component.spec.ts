import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMineComponent } from './table-mine.component';

describe('TableMineComponent', () => {
  let component: TableMineComponent;
  let fixture: ComponentFixture<TableMineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableMineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
