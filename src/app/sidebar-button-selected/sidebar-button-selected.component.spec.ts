import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarButtonSelectedComponent } from './sidebar-button-selected.component';

describe('SidebarButtonSelectedComponent', () => {
  let component: SidebarButtonSelectedComponent;
  let fixture: ComponentFixture<SidebarButtonSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarButtonSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarButtonSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
