import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesMainComponent } from './notes-main.component';

describe('NotesMainComponent', () => {
  let component: NotesMainComponent;
  let fixture: ComponentFixture<NotesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
