import { tick } from '@angular/core/testing';
import { rawNote } from './../../Interfaces/noteInterface';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { not } from 'rxjs/internal/util/not';

@Component({
  selector: 'app-edit-note',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgSelectModule],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.css',
})
export class EditNoteComponent implements OnInit {
  noteId: string = '';
  parsedNotes: any[] = [];
  noteToBeEdit: rawNote = {};
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.noteId = this.route.snapshot.paramMap.get('id') ?? '';
  }

  arr: String[] = ['23', '234'];
  ngOnInit(): void {
    const unParsedNotes = localStorage.getItem('notes');
    this.parsedNotes = JSON.parse(unParsedNotes ?? '');
    this.noteToBeEdit =
      this.parsedNotes.find((note: rawNote) => note.id === this.noteId) ?? {};
    this.completeNote = this.fb.group({
      id: new FormControl(this.noteId),
      title: new FormControl(this.noteToBeEdit.title ?? ''),
      tags: new FormControl(this.noteToBeEdit.tags),
      description: new FormControl(this.noteToBeEdit.description ?? ''),
    });
    console.log('in onInit method ', this.completeNote.value);

    // this.completeNote = this.fb.group({
    //   id: new FormControl(this.noteId),
    //   title: new FormControl(this.noteToBeEdit.title ?? ''),
    //   tags: new FormControl(
    //     this.noteToBeEdit.tags?.map((e) => e.label ?? '') ?? [{}]
    //   ),
    //   description: new FormControl(this.noteToBeEdit.description ?? ''),
    // });
  }

  completeNote = this.fb.group({
    id: new FormControl(this.noteId),
    title: new FormControl(this.noteToBeEdit.title ?? ''),
    tags: new FormControl(this.noteToBeEdit.tags) ?? [],
    description: new FormControl(this.noteToBeEdit.description ?? ''),
  });

  onSubmit() {
    const idx = this.parsedNotes.findIndex(
      (note: rawNote) => note.id === this.noteId
    );

    this.parsedNotes.splice(idx, 1);
    this.parsedNotes.push(this.completeNote.value);
    console.log(' on submit tags ', this.completeNote.value);
    console.log(' in editing notes parsed ', this.parsedNotes);
    localStorage.setItem('notes', JSON.stringify(this.parsedNotes));
    this.completeNote.reset();
    this.router.navigate(['/']);
  }
}
