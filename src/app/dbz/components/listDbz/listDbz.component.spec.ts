import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDbzComponent } from './listDbz.component';

describe('ListComponent', () => {
  let component: ListDbzComponent;
  let fixture: ComponentFixture<ListDbzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDbzComponent]
    });
    fixture = TestBed.createComponent(ListDbzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
