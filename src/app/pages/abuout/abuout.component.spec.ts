import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbuoutComponent } from './abuout.component';

describe('AbuoutComponent', () => {
  let component: AbuoutComponent;
  let fixture: ComponentFixture<AbuoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbuoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbuoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
