import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { rawNote } from '../../Interfaces/noteInterface';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { MyService } from '../../service/services';
import { not } from 'rxjs/internal/util/not';

@Component({
  selector: 'app-view-notes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-notes.component.html',
  styleUrl: './view-notes.component.css',
})
export class ViewNotesComponent implements OnInit {
  @Input() callBySearch: boolean = false;
  searchQuery: string | null = null;
  notFound: string = 'No Saved Notes Found';
  parsedAllNotes: rawNote[] = [];
  searchByTags: boolean = true;
  constructor(private router: Router, private variableService: MyService) {}
  ngOnInit() {
    if (this.callBySearch === true) {
      this.variableService.searchQueryValue.subscribe((Data) => {
        this.searchQuery = Data.searchQuery;
        this.searchByTags = Data.selectedOptionTag;
        console.log(this.searchQuery, ' <- input |  tag ->', this.searchByTags);
        this.getAll();
      });
    } else {
      this.getAll();
    }
  }

  getAll() {
    const allNotes: any = localStorage.getItem('notes');
    if (this.searchQuery === null && this.callBySearch === false) {
      this.parsedAllNotes = JSON.parse(allNotes);
    } else if (this.callBySearch && this.searchQuery === null) {
      console.log('not found ');
      this.notFound =
        ' please enter in Search to and press search button to search the note ';
      this.parsedAllNotes = [];
    } else {
      // if (Boolean(this.searchByTags)) {
      //   console.log(' in tag filteration');
      //   let unFilteredNotes: rawNote[] = JSON.parse(allNotes);
      //   this.parsedAllNotes = unFilteredNotes.filter((note) => {
      //     note.tags?.filter((tag) =>
      //       tag.label.includes(this.searchQuery ?? '')
      //     );
      //   });
      // } else {
      //   console.log('in title filteration');
      //   let unFilteredNotes: rawNote[] = JSON.parse(allNotes);
      //   this.parsedAllNotes = unFilteredNotes.filter((note) =>
      //     note.title?.includes(this.searchQuery ?? '')
      //   );

      //   // console.log(this.parsedAllNotes);
      // }
      console.log('for filteration ', this.searchByTags);
      this.filterByTagOrTitle(this.searchByTags as unknown as string, allNotes);
    }
  }

  filterByTagOrTitle(condition: string, notes: any) {
    // debugger;

    if (+condition) {
      console.log(' in tag filteration');
      let unFilteredNotes: rawNote[] = JSON.parse(notes);
      this.parsedAllNotes = unFilteredNotes.filter((note) =>
        note.tags?.some((tag) => tag.label.includes(this.searchQuery ?? ''))
      );
      console.log(this.parsedAllNotes);
    } else {
      console.log('in title filteration');
      let unFilteredNotes: rawNote[] = JSON.parse(notes);
      this.parsedAllNotes = unFilteredNotes.filter((note) =>
        note.title?.includes(this.searchQuery ?? '')
      );

      // console.log(this.parsedAllNotes);
    }
  }

  onDelete(note: rawNote) {
    this.parsedAllNotes = this.parsedAllNotes.filter((e) => e?.id !== note?.id);
    localStorage.setItem('notes', JSON.stringify(this.parsedAllNotes));
  }

  onUpdate(note: rawNote) {
    this.router.navigate(['/edit', note?.id]);
  }
}
