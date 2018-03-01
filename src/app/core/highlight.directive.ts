import { Directive, Renderer2, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight: string;

  private _defaultColor = 'red';

  constructor(private _el: ElementRef, private _renderer: Renderer2) {
    this._renderer.setStyle(this._el.nativeElement, 'color', this._defaultColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this._renderer.setStyle(this._el.nativeElement, 'color', this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._renderer.setStyle(this._el.nativeElement, 'color', this._defaultColor);
  }
}
