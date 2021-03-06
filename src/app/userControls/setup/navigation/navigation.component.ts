import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap';

declare var $: any;


@Component({
  moduleId: module.id,
  selector: 'app-setup-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
   public oneAtATime = false;

  constructor() { }

  ngOnInit() {
    $('.arrow').click(function() {
      $(this).toggleClass('lArrow');
      $(this).toggleClass('rArrow');
      $('#subPageNav').toggleClass('slideInLeft');
      $('#subPageNav').toggleClass('hideMenu');
    });
    $('#subPageNav li a').click(function () {
      $('#subPageNav').toggleClass('slideInLeft');
      $('#subPageNav').toggleClass('hideMenu');
      $('.arrow').toggleClass('lArrow');
      $('.arrow').toggleClass('rArrow');
    });
  }

}
