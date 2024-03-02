import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[hover-affect]'
})
export class HoverAffectDirective {
  @HostBinding('style.textDecoration') textDecoration: string;
  @HostBinding('style.fontWeight') fontWeight: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.textDecoration = 'underline';
    this.fontWeight = 'bold';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textDecoration = 'none';
    this.fontWeight = 'normal';
  }
}
