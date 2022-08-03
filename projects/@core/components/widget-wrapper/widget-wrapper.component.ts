import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss'],
})
export class WidgetWrapperComponent implements OnInit {
  @Input() WidgetOptions: any = {
    vScroll: false,
    hScroll: false,
    showHeader: true,
    showFooter: false,
  };

  constructor() {}

  ngOnInit(): void {}
}
