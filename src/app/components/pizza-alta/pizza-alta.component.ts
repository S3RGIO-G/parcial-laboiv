import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInputComponent } from '../form-input/form-input.component';
import { PizzaService } from 'src/app/services/pizza.service';
import { Pizza } from 'src/app/classes/pizza';
import { FormValidator } from 'src/app/validators/forms.validator';

@Component({
  selector: 'app-pizza-alta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormInputComponent],
  templateUrl: './pizza-alta.component.html',
  styleUrls: ['./pizza-alta.component.scss'],
})
export class PizzaAltaComponent implements OnInit {
  formAlta!: FormGroup;
  @Output() pizzaCreadaEvent = new EventEmitter<Pizza>();
  constructor(private pizzaService : PizzaService) {
    this.formAlta = new FormGroup({
      nombre: new FormControl(null, {
        validators:[FormValidator.onlyLetters],
        updateOn:'change'
      }),
      ingredientes: new FormControl(),
      precio: new FormControl(0, {
        validators:[FormValidator.onlyNumbers],
        updateOn:'change'
      }),
      peso: new FormControl(500, {
        validators:[Validators.min(500), Validators.max(1000), FormValidator.onlyNumbers],
        updateOn:'change'
      }),
    });
  }

  ngOnInit(): void {}

  onSubmit() {

    this.validateEmptyInputs();
    if (this.formAlta.invalid) return;

    const pizza={
      nombre: this.nombre.value,
      ingredientes: this.ingredientes.value,
      precio: Number(this.precio.value),
      peso: Number(this.peso.value),
    }

    this.pizzaService.addPizza(pizza).then(res=>{
      this.pizzaCreadaEvent.emit(pizza);
      this.formAlta.reset()
    });
  }

  validateEmptyInputs() {
    const arrayControls = Object.values(this.formAlta.controls).map(
      (obj) => obj
    );
    arrayControls.forEach((control) => {
      if (!control.value) {
        control.setErrors({ invalid: true });
      }
    });
  }

  get nombre() {
    return this.formAlta.controls['nombre'];
  }
  get ingredientes() {
    return this.formAlta.controls['ingredientes'];
  }
  get precio() {
    return this.formAlta.controls['precio'];
  }
  get peso() {
    return this.formAlta.controls['peso'];
  }
}
