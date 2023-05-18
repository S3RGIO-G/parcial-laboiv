import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { FormInputComponent } from 'src/app/components/form-input/form-input.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ModalUsersComponent } from 'src/app/components/modal-users/modal-users.component';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormInputComponent,
    AlertComponent,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ModalUsersComponent,
    SpinnerComponent,
  ],
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  showAlert: boolean = false;
  showUsersModal: boolean = false;
  formLog: FormGroup;
  textError?: string;

  constructor(private userService: UserService, private router: Router) {
    this.formLog = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      showPassword: new FormControl(),
    });
  }
  ngOnInit(): void {}

  hideAlert(value: boolean) {
    this.showAlert = value;
  }

  onSubmit() {
    this.loading = true;
    this.showAlert = false;
    this.userService
      .login(this.formLog.value)
      .then((res) => {
        this.searchUserFirestore(res.user);
      })
      .catch((err) => {
        this.loading = false;
        this.showAlert = true;
        this.textError = 'Error, algo salio mal';
        if (err.code === 'auth/missing-email')
          this.textError = 'Por favor ingrese un correo electronico';
        if (err.code === 'auth/missing-password')
          this.textError = 'Por favor ingrese una contraseña';
        if (err.code === 'auth/invalid-email')
          this.textError = 'El correo no es valido';
        if (err.code === 'auth/user-not-found')
          this.textError = 'El usuario no esta registrado';
        if (err.code === 'auth/wrong-password')
          this.textError = 'La contraseña no es correcta';
        if (err.code === 'auth/network-request-failed')
          this.textError = 'Se perdió la conexion a internet';
      });
  }

  async searchUserFirestore(usuario: any) {
    const response = await this.userService.getUserById(usuario.uid);
    const user = {
      ...usuario,
      ...response.data()
    }
    this.loading = false;
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/bienvenido']);
  }

  userSelected(event: any) {
    this.password.setValue(event.password);
    this.email.setValue(event.email);
  }

  get showPassword() {
    return this.formLog.controls['showPassword'];
  }
  get password() {
    return this.formLog.controls['password'];
  }
  get email() {
    return this.formLog.controls['email'];
  }
}
