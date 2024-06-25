import { Routes } from '@angular/router';
import { AddNoteComponent } from './Components/add-note/add-note.component';
import { AppComponent } from './app.component';
import { NotesMainComponent } from './Components/notes-main/notes-main.component';
import { EditNoteComponent } from './Components/edit-note/edit-note.component';
import { SearchNotesComponent } from './Components/search-notes/search-notes.component';

export const routes: Routes = [
  { path: '', component: NotesMainComponent },
  { path: 'add', component: AddNoteComponent },
  { path: 'edit/:id', component: EditNoteComponent },
  { path: 'search', component: SearchNotesComponent },
];
