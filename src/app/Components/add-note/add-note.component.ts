import { Component, EventEmitter, Output, output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { rawNote } from '../../Interfaces/noteInterface';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-note',
  imports: [NgSelectModule, FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css',
})
export class AddNoteComponent {
  constructor(private fb: FormBuilder) {}

  selectedTags: string[] = [];
  completeNote = this.fb.group({
    id: new FormControl(''), // error
    title: new FormControl(''),
    tags: new FormControl([]),
    description: new FormControl(''),
  });

  onSubmit() {
    try {
      this.completeNote.value.id = uuidv4();
      if (this.completeNote.value.title == '') {
        alert('please enter title');
      } else {
        const previousNotes = localStorage.getItem('notes');

        if (previousNotes) {
          let parsedPreviousNotes = JSON.parse(previousNotes);
          parsedPreviousNotes.push(this.completeNote.value);
          localStorage.setItem('notes', JSON.stringify(parsedPreviousNotes));
        } else {
          localStorage.setItem(
            'notes',
            JSON.stringify([this.completeNote.value])
          );
        }
        this.completeNote.reset();
      }
    } catch (error) {
      console.log(error);
    }
  }
}
