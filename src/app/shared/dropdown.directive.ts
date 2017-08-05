import { Directive, HostListener, HostBinding } from '@angular/core';


@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
  // when isOpen is true, use "open" style
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
}