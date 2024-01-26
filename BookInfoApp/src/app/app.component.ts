import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BookDetailComponent} from "./content-card/content-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BookInfoApp';
}
