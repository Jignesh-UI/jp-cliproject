import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap';
@Component({
  moduleId: module.id,
  selector: 'app-setup-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
   public oneAtATime: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
