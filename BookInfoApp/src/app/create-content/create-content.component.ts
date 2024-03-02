import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import {NgStyle} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  standalone: true,
  imports: [
    NgStyle,
    FormsModule
  ],
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent {
  @Output() contentAdded = new EventEmitter<Content>();
  id: null = null;
  title: string = '';
  description: string = '';
  creator: string = '';
  imgURL: string = '';
  type: string = '';
  errorMessage: string = '';

  addContent(): void {
    if (!this.id || !this.title || !this.description || !this.creator || !this.imgURL || !this.type) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    const newContent: Content = {
      id: this.id,
      title: this.title,
      description: this.description,
      creator: this.creator,
      imgURL: this.imgURL,
      type: this.type
    };

    this.contentAdded.emit(newContent);
    this.clearFields();
  }

  clearFields(): void {
    this.id = null;
    this.title = '';
    this.description = '';
    this.creator = '';
    this.imgURL = '';
    this.type = '';
    this.errorMessage = '';
  }
}
