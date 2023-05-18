import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Pais } from 'src/app/classes/pais';
import { RepartidorService } from 'src/app/services/repartidor.service';
import { FormValidator } from 'src/app/validators/forms.validator';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'app-form-repartidor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormInputComponent],
  templateUrl: './form-repartidor.component.html',
  styleUrls: ['./form-repartidor.component.scss'],
})
export class FormRepartidorComponent implements OnInit {
  formRepartidor: FormGroup;
  @Input() selectedCountry!: Pais;
  @Output() loadingEvent = new EventEmitter<boolean>();

  constructor(private repartidorService: RepartidorService) {
    this.formRepartidor = new FormGroup({
      dni: new FormControl('0', {
        validators: [FormValidator.onlyNumbers, Validators.maxLength(8)],
        updateOn: 'change',
      }),
      nombre: new FormControl(null, {
        validators: [FormValidator.onlyLetters],
        updateOn: 'change',
      }),
      edad: new FormControl(18, {
        validators: [FormValidator.onlyNumbers, Validators.min(18)],
        updateOn: 'change',
      }),
      capacidad: new FormControl(1, {
        validators: [FormValidator.onlyNumbers, Validators.min(1)],
        updateOn: 'change',
      }),
      pais: new FormControl(),
      unidad: new FormControl(),
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    this.validateEmptyInputs();
    if (this.formRepartidor.invalid) return;

    const repartidor = {
      dni: this.dni.value,
      nombre: this.nombre.value,
      edad: Number(this.edad.value),
      capacidad_transporte: Number(this.capacidad.value),
      unidad_propia: this.unidad.value,
      pais_origen: {
        name: this.selectedCountry.name,
        img: this.selectedCountry.img,
        language: this.selectedCountry.language,
      },
    };

    this.loadingEvent.emit(true);
    this.repartidorService.addRepartidor(repartidor).then((res) => {
      this.loadingEvent.emit(false);
      this.formRepartidor.reset();
    });
  }

  setCountry(country: Pais) {
    this.pais.setValue(country.name);
  }

  validateEmptyInputs() {
    const arrayControls = Object.values(this.formRepartidor.controls).map(
      (obj) => obj
    );
    arrayControls.forEach((control) => {
      if (!control.value) {
        control.setErrors({ invalid: true });
      }
    });
  }

  get dni() {
    return this.formRepartidor.controls['dni'];
  }
  get nombre() {
    return this.formRepartidor.controls['nombre'];
  }
  get edad() {
    return this.formRepartidor.controls['edad'];
  }
  get capacidad() {
    return this.formRepartidor.controls['capacidad'];
  }
  get unidad() {
    return this.formRepartidor.controls['unidad'];
  }
  get pais() {
    return this.formRepartidor.controls['pais'];
  }
}
