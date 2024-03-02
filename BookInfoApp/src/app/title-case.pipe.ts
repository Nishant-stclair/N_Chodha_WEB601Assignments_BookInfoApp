import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './helper-files/content-interface';
@Pipe({
  name: 'titleCase',
  standalone: true
})
export class TitleCasePipe implements PipeTransform {
  transform(contents: Content[], typeFilter?: string): Content[] {
    if (!contents || contents.length === 0) {
      return [];
    }

    if (!typeFilter) {
      return contents.filter(content => !content.type);
    } else {
      return contents.filter(content => content.type === typeFilter);
    }
  }

}
