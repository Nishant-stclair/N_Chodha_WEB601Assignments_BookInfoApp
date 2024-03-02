// src/app/content-card/content-card.component.ts
import {Component, Input, OnInit, signal} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgClass,
    NgOptimizedImage
  ],
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  @Input() id!: number;
  @Input() title!: string;
  @Input() creator!: string;
  private _imgURL!: string; // Private property for imgURL
  private _type!: string; // Private property for type
  @Input() tags: string[] = [];
  handleImageClick = signal<any | null>(null);
  // @ts-ignore
  @Input() description!: string | undefined | Alert.Description | BufferSource;
  content: string | undefined;

  @Input()
  set imgURL(value: string | undefined) {
    // Apply custom transformation logic for imgURL
    this._imgURL = this.transformImgURL(value);
  }

  get imgURL(): string {
    return this._imgURL;
  }

  @Input()
  set type(value: string | undefined) {
    // Apply custom transformation logic for type
    this._type = this.transformType(value);
  }

  get type(): string {
    return this._type;
  }

  constructor() {}

  ngOnInit(): void {

  }

  private transformImgURL(value: string | undefined): string {
    return value ? value : 'DefaultImgURL';
  }

  private transformType(value: string | undefined): string {
    return value ? value.toUpperCase() : 'DefaultType';
  }
}
