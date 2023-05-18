import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCardComponent } from './detalle-card.component';

describe('DetalleCardComponent', () => {
  let component: DetalleCardComponent;
  let fixture: ComponentFixture<DetalleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DetalleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
