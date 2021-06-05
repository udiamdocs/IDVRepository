import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAStoreComponent } from './select-a-store.component';

describe('SelectAStoreComponent', () => {
  let component: SelectAStoreComponent;
  let fixture: ComponentFixture<SelectAStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
