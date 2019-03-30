import { BasePageComponent } from './../../partials/base-page/base-page.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) { 
    super(route);
  }

  ngOnInit() {
  }

}
