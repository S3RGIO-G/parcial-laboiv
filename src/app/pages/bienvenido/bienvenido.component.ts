import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, SpinnerComponent],
})
export class BienvenidoComponent implements OnInit {
  user!: any;
  loading = false;
  infoGithub!: any;

  constructor(private githubService: GithubService) {}
  ngOnInit(): void {
    this.cargarUsuario();
    this.githubService.getInfo().then((res) => {
      this.infoGithub = res;
    });
  }

  cargarUsuario() {
    let user = localStorage.getItem('user');
    if (user !== null) {
      this.user = JSON.parse(user);
    }
  }
}
