import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaModificacionComponent } from './pizza-modificacion.component';

describe('PizzaModificacionComponent', () => {
  let component: PizzaModificacionComponent;
  let fixture: ComponentFixture<PizzaModificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PizzaModificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaModificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
