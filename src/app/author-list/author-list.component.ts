import { Component, OnInit } from '@angular/core';
import { authors } from '../authors';
export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}
@Component({
  selector: 'app-author-list',
  template: `<app-author-detail
  *ngFor="let author of authors"
  [author]="author"
  (select)="onSelected($event)"
  (deleteAuthor)="handleDelete($event)"
>
</app-author-detail> 
<br>
<div >current user {{ currentAuthor.firstName }} {{ currentAuthor.lastName }}</div>
`,
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  authors = authors;
  constructor() { }
  ngOnInit(): void {
  }
  handleDelete(author: Author) {
    console.log("parent listen emit", author)
    this.authors = this.authors.filter((item) => item.id !== author.id);
    if (this.currentAuthor.id === author.id) {
      this.currentAuthor = this.authors[0];
    }
  }
  currentAuthor: Author = authors[0];
  onSelected(author: Author) {
    this.currentAuthor = author;
  }
}
