import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from '../authors';
@Component({
  selector: 'app-author-detail',
  template: `
    <div *ngIf="author">
      <strong>{{ author.firstName }} {{ author.lastName }}</strong>
      <button (click)="select.emit(author)">Select</button>
      <button (click)="handleDelete()">x</button>
    </div>
  `,
  styles: [``],
})

export class AuthorDetailComponent implements OnInit {
  @Input() author: Author | undefined;
  @Output() deleteAuthor = new EventEmitter<Author>();
  // custom event to emit the selected author
  @Output() select = new EventEmitter<Author>();
  constructor() { }

  ngOnInit(): void {
  }
  handleDelete() {
    console.log("delete", this.author)
    this.deleteAuthor.emit(this.author);
  }

}
