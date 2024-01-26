import { Content } from './content-interface';

export class ContentList {
  private contentArray: Content[] = [];

  constructor() {}

  get content(): Content[] {
    return this.contentArray;
  }

  add(contentItem: Content): void {
    this.contentArray.push(contentItem);
  }

  count(): number {
    return this.contentArray.length;
  }

  displayAtIndex(index: number): string {
    const contentItem = this.contentArray[index];
    return `
      <div>
        <h2>${contentItem.title}</h2>
        <p>${contentItem.description}</p>
        <p>Creator: ${contentItem.creator}</p>
        ${contentItem.imgURL ? `<img src="${contentItem.imgURL}" alt="Image">` : ''}
        ${contentItem.type ? `<p>Type: ${contentItem.type}</p>` : ''}
      </div>
    `;
  }
}
