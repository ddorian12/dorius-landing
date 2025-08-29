import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerEarlyAccessComponent } from './seller-early-access.component';

describe('SellerEarlyAccessComponent', () => {
  let component: SellerEarlyAccessComponent;
  let fixture: ComponentFixture<SellerEarlyAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerEarlyAccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerEarlyAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
