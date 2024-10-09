import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourDeliveriesComponent } from './your-deliveries.component';

describe('YourDeliveriesComponent', () => {
  let component: YourDeliveriesComponent;
  let fixture: ComponentFixture<YourDeliveriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourDeliveriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
