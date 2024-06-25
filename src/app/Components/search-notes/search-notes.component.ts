import { FormsModule, NgModel } from '@angular/forms';
import { ViewNotesComponent } from './../view-notes/view-notes.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyService } from '../../service/services';

@Component({
  selector: 'app-search-notes',
  standalone: true,
  imports: [ViewNotesComponent, FormsModule],
  templateUrl: './search-notes.component.html',
  styleUrl: './search-notes.component.css',
})
export class SearchNotesComponent {
  searchTerm: string | null = null;
  selectedTag: boolean = false;
  constructor(private variableService: MyService) {}
  fetchFilterNotes() {
    if (this.searchTerm !== null) {
      this.variableService.updateVariable({
        searchQuery: this.searchTerm,
        selectedOptionTag: this.selectedTag,
      });
    }
  }
}
