import { Directive, HostBinding, HostListener } from "@angular/core";
import {element} from "protractor";

declare var jquery: any;
declare var $: any;

@Directive({
  selector: '[taskAcardion]'
})
export class TaskAcardionDirective {


  @HostBinding('class.open') isOpened = false;

  @HostListener('click') onClick() {
    this.isOpened = !this.isOpened;
    console.log('click acardion');

    // if (!$(this).hasClass('icon-cancel')) {
    //   var parentTask = $(this).closest('task');
    //   var taskKontentWrap = $(parentTask).find('.task-content-wrap');
    //   console.log(parentTask,taskKontentWrap);
    //
    //   if ($(parentTask).hasClass('open')) {
    //     $(taskKontentWrap).slideUp(500, function () {
    //       $(parentTask).removeClass('open');
    //     });
    //   } else {
    //     $(taskKontentWrap).slideDown(500, function () {
    //       $(parentTask).addClass('open');
    //     });
    //   }
    //
    // }

  }

  // $('.task').click(function() {
  //   console.log('task klick me');
  // })

}
