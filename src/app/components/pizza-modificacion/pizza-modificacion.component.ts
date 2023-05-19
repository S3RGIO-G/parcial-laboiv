import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInputComponent } from '../form-input/form-input.component';
import { PizzaService } from 'src/app/services/pizza.service';
import { Pizza } from 'src/app/classes/pizza';
import { FormValidator } from 'src/app/validators/forms.validator';

@Component({
  selector: 'app-pizza-modificacion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormInputComponent],
  templateUrl: './pizza-modificacion.component.html',
  styleUrls: ['./pizza-modificacion.component.scss']
})
export class PizzaModificacionComponent implements OnInit{
  formMod!: FormGroup;
  @Input() pizza !: Pizza

  constructor(private pizzaService : PizzaService) {
    this.formMod = new FormGroup({
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
    if (this.formMod.invalid) return;

    const pizza={
      nombre: this.nombre.value,
      ingredientes: this.ingredientes.value,
      precio: Number(this.precio.value),
      peso: Number(this.peso.value),
      id: this.pizza.id,
    }

    this.pizzaService.updatePizza(pizza).then(res=>{
      this.formMod.reset()
    });
  }

  validateEmptyInputs() {
    const arrayControls = Object.values(this.formMod.controls).map(
      (obj) => obj
    );
    arrayControls.forEach((control) => {
      if (!control.value) {
        control.setErrors({ invalid: true });
      }
    });
  }

  setValuesForm(pizza : Pizza){
    this.nombre.setValue(pizza.nombre);
    this.ingredientes.setValue(pizza.ingredientes);
    this.precio.setValue(pizza.precio);
    this.peso.setValue(pizza.peso);
  }

  get nombre() {
    return this.formMod.controls['nombre'];
  }
  get ingredientes() {
    return this.formMod.controls['ingredientes'];
  }
  get precio() {
    return this.formMod.controls['precio'];
  }
  get peso() {
    return this.formMod.controls['peso'];
  }
}
