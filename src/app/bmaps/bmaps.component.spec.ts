import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmapsComponent } from './bmaps.component';

describe('BmapsComponent', () => {
  let component: BmapsComponent;
  let fixture: ComponentFixture<BmapsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BmapsComponent]
    });
    fixture = TestBed.createComponent(BmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
