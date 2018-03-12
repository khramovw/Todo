import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";


declare var $: any;

@Directive({
  selector: '[taskAcardion]'
})
export class TaskAcardionDirective {

  @HostListener('click') onClick() {

    if (!$(this).hasClass('icon-cancel')) {

      let parentTask = this.elementRef.nativeElement.closest('.task');
      let taskContentWrap = $(parentTask).find('.task-content-wrap');

      if ($(parentTask).hasClass('open')) {
        $(taskContentWrap).slideUp(500, function () {
          $(parentTask).removeClass('open');
        });
      } else {
        $(taskContentWrap).slideDown(500, function () {
          $(parentTask).addClass('open');
        })
      }
    }

  }

  constructor( private elementRef: ElementRef, private renderer: Renderer2 ) {

  }








}
