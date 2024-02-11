import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContentListComponent} from "./content-list/content-list.component";
import {ContentCardComponent} from "./content-card/content-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentListComponent, ContentCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BookInfoApp';
}
