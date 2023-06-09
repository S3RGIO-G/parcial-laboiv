import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaAltaComponent } from './pizza-alta.component';

describe('PizzaAltaComponent', () => {
  let component: PizzaAltaComponent;
  let fixture: ComponentFixture<PizzaAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PizzaAltaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
