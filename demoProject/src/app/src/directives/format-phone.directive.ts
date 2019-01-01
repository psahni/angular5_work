import { parsePhoneNumber, CountryCode } from 'libphonenumber-js';

import { Directive, Input, OnInit, HostListener, ElementRef, Renderer } from '@angular/core';
import { format } from 'util';

@Directive({
  selector: '[appFormatPhone]'
})
export class FormatPhoneDirective {
  errorElement;
  constructor(private el: ElementRef,  private renderer: Renderer) { }

  @Input() appFormatPhone: CountryCode;
  @HostListener('blur') format() {

    try {
      const parsedValue =  parsePhoneNumber(this.el.nativeElement.value, (this.appFormatPhone || 'US'));
      this.el.nativeElement.value = parsedValue.formatInternational();

      if (this.errorElement) {
        this.renderer.setElementStyle(this.errorElement, 'display', 'none');
      }
    } catch (err) {
      if (!this.errorElement) {
        this.errorElement = this.renderer.createElement(this.el.nativeElement.parentNode, 'span');
        this.renderer.setElementClass(this.errorElement, 'error', true);
      }

      this.errorElement.innerHTML = 'Not a valid phone number';
      this.errorElement.style.display = 'inline';
    }
  }
}
