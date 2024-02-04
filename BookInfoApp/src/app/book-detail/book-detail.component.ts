// src/app/book-detail/book-detail.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  standalone: true,
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  // You can add properties or methods specific to BookDetailComponent here

  constructor() {}

  ngOnInit(): void {
    // Initialization logic here
  }
}
