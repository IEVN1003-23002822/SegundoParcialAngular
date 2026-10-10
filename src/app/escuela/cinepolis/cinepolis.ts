import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cinepolis',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './cinepolis.html',
  styleUrl: './cinepolis.css',
})
export class Cinepolis {
  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    compradores: new FormControl(1, [Validators.required, Validators.min(1)]),
    tarjeta: new FormControl('no', Validators.required),
    boletos: new FormControl(1, [Validators.required, Validators.min(1)])
  });

  precio: number = 12;
  total: number = 0;
  error: string = '';
  enviado: boolean = false;

  procesar(): void {
    this.enviado = true;
    this.error = '';

    if (this.form.invalid) {
      return;
    }

    const v = this.form.value;
    const compradores = Number(v.compradores);
    const cant = Number(v.boletos);
    const limite = compradores * 7;

    if (cant > limite) {
      this.error = 'Exceso de boletos permitidos.';
      return;
    }

    const subtotal = cant * this.precio;
    let desc = 0;
    let rangoBoletos = 0;

    switch (true) {
      case (cant > 5):
        rangoBoletos = 2;
        break;
      case (cant >= 3):
        rangoBoletos = 1;
        break;
      default:
        rangoBoletos = 0;
        break;
    }

    switch (rangoBoletos) {
      case 2:
        desc = 0.15;
        break;
      case 1:
        desc = 0.10;
        break;
      default:
        desc = 0;
        break;
    }

    let final = subtotal - (subtotal * desc);

    switch (v.tarjeta) {
      case 'si':
        final = final * 0.90;
        break;
      default:
        break;
    }

    this.total = final;

    const nuevaVenta = {
      nombre: v.nombre,
      compradores: v.compradores,
      tarjeta: v.tarjeta,
      boletos: v.boletos,
      total: this.total
    };

    const ventasGuardadas = JSON.parse(localStorage.getItem('ventas') || '[]');
    ventasGuardadas.push(nuevaVenta);
    localStorage.setItem('ventas', JSON.stringify(ventasGuardadas));
  }
  
  salir(): void {
    this.form.reset({
      nombre: '',
      compradores: 1,
      tarjeta: 'no',
      boletos: 1
    });
    this.total = 0;
    this.error = '';
    this.enviado = false;
  }
}