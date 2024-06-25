import { Component } from '@angular/core';
import { ViewNotesComponent } from '../view-notes/view-notes.component';
@Component({
  selector: 'app-notes-main',
  standalone: true,
  imports: [ViewNotesComponent],
  templateUrl: './notes-main.component.html',
})
export class NotesMainComponent {}
