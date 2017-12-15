import { Directive, ElementRef, HostListener } from '@angular/core';
//import { HostListener } from '@angular/core/src/metadata/directives';

@Directive({
  selector: '[blueColored]'
})
export class BlueColoredDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color = "blue";
  }
  @HostListener('click', ['$event'])
  elemClicked(elem){
    console.log('clicked',elem);
  }
}
