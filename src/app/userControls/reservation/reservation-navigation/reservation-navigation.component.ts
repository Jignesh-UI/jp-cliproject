import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-reservation-navigation',
  templateUrl: './reservation-navigation.component.html',
  styleUrls: ['./reservation-navigation.component.css']
})
export class ReservationNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.showNav').click(function() {
      $(this).children('.arrow').toggleClass('lArrow');
      $(this).children('.arrow').toggleClass('rArrow');
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
