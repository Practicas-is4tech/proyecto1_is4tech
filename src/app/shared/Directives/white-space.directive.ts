import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appWhiteSpace]',
  standalone: true
})
export class WhiteSpaceDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    const value = this.el.nativeElement.value;
    console.log('Sin directiva: ', value);
    const trimmedValue = value.replace(/^\s+|\s+$/g, '');
    this.el.nativeElement.value = trimmedValue;
    console.log('Con direciva: ', trimmedValue);
  }
}
