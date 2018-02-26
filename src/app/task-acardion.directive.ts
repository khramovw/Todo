import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[taskAcardion]'
})
export class TaskAcardionDirective{

  @HostBinding('class.open') isOpened = false;

  @HostListener('click') onClick() {
    this.isOpened = !this.isOpened;
    console.log('click acardion');
  }

}
