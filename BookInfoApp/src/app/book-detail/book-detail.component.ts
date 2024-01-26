import {Component, OnInit} from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit {
  contentList: ContentList = new ContentList();

  constructor() {
    // Adding sample book items to ContentList
    this.contentList.add({
      id: 1,
      title: 'The Great Gatsby',
      description: 'A novel by F. Scott Fitzgerald',
      creator: 'F. Scott Fitzgerald',
      imgURL: 'https://example.com/great-gatsby.jpg',
      type: 'Novel'
    });

    this.contentList.add({
      id: 2,
      title: 'To Kill a Mockingbird',
      description: 'A novel by Harper Lee',
      creator: 'Harper Lee',
      imgURL: 'https://example.com/to-kill-mockingbird.jpg',
      type: 'Novel'
    });

    this.contentList.add({
      id: 3,
      title: '1984',
      description: 'A dystopian novel by George Orwell',
      creator: 'George Orwell',
      imgURL: 'https://example.com/1984.jpg',
      type: 'Dystopian Fiction'
    });
  }

  ngOnInit(): void {}
}
