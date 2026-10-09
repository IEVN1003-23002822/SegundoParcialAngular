import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-lista-escuela',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './lista-escuela.html',
  styleUrl: './lista-escuela.css',
})
export class ListaEscuela implements OnInit {
  formulario!: FormGroup;

  nuevoAlumno: Alumno = {
    matricula: 'xxx',
    nombre: 'xxx',
    correo: 'xx',
    materia: 'xx',
  };

  ngOnInit(): void {
    this.formulario = new FormGroup({
      matricula: new FormControl(''),
      nombre: new FormControl(''),
      correo: new FormControl(''),
      materia: new FormControl(''),
    });
  }

  MuesraAlumno(): void {
    this.nuevoAlumno.matricula = this.formulario.value.matricula;
    this.nuevoAlumno.nombre = this.formulario.value.nombre;
    this.nuevoAlumno.correo = this.formulario.value.correo;
    this.nuevoAlumno.materia = this.formulario.value.materia;
  }
}