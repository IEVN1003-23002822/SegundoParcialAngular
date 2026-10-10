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
  
  alumnos: Alumno[] = [];

  nuevoAlumno: Alumno = {
    matricula: '',
    nombre: '',
    correo: '',
    materia: '',
  };

  ngOnInit(): void {
    this.formulario = new FormGroup({
      matricula: new FormControl(''),
      nombre: new FormControl(''),
      correo: new FormControl(''),
      materia: new FormControl(''),
    });
    this.cargarLocalStorage();
  }

  cargarAlumno(): void {
    this.nuevoAlumno.matricula = this.formulario.value.matricula;
    this.nuevoAlumno.nombre = this.formulario.value.nombre;
    this.nuevoAlumno.correo = this.formulario.value.correo;
    this.nuevoAlumno.materia = this.formulario.value.materia;
  }

  agregarAlumno(): void {
    if (
      this.formulario.value.matricula === '' ||
      this.formulario.value.nombre === '' ||
      this.formulario.value.correo === '' ||
      this.formulario.value.materia === ''
    ) {
      alert('Todos los datos son obligatorios');
      return;
    }

    const alumnoAgregado: Alumno = {
      matricula: this.formulario.value.matricula,
      nombre: this.formulario.value.nombre,
      correo: this.formulario.value.correo,
      materia: this.formulario.value.materia,
    };

    this.alumnos.push(alumnoAgregado);

    localStorage.setItem(
      'alumnos',
      JSON.stringify(this.alumnos)
    );
  }

  cargarLocalStorage(): void {
    const datos = localStorage.getItem('alumnos');
    if (datos) {
      this.alumnos = JSON.parse(datos);
    }
  }

  editarAlumno(index: number): void {
    const al = this.alumnos[index];
    this.formulario.setValue({
      matricula: al.matricula,
      nombre: al.nombre,
      correo: al.correo,
      materia: al.materia
    });
    this.alumnos.splice(index, 1);
    localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
  }

  eliminarAlumno(index: number): void {
    this.alumnos.splice(index, 1);
    localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
  }
}