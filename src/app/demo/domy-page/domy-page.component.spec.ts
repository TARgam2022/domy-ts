import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomyPageComponent } from './domy-page.component';

describe('DomyPageComponent', () => {
  let component: DomyPageComponent;
  let fixture: ComponentFixture<DomyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomyPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
