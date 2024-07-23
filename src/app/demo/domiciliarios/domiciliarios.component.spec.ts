import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomiciliariosComponent } from './domiciliarios.component';

describe('DomiciliariosComponent', () => {
  let component: DomiciliariosComponent;
  let fixture: ComponentFixture<DomiciliariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomiciliariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomiciliariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
