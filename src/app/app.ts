import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ZodiacoComponent } from './formulario/zodiaco/zodiaco';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ZodiacoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}