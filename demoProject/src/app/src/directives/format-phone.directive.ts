import { parsePhoneNumber, AsYouType, CountryCode } from 'libphonenumber-js'

import { Directive, Input, OnInit, HostListener, ElementRef, Renderer, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFormatPhone]'
})
export class FormatPhoneDirective implements OnInit {
  errorElement;

  constructor(private el: ElementRef, private renderer: Renderer) { }

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



  ngOnInit() {
    // console.log(this.appFormatPhone);

  }
}
