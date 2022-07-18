import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './system-layout.component.html',
  styleUrls: ['./system-layout.component.less']
})
export class SystemLayoutComponent implements OnInit {
  isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }

}
