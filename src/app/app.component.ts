import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NotesMainComponent } from './Components/notes-main/notes-main.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NotesMainComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'notes-app';
}
