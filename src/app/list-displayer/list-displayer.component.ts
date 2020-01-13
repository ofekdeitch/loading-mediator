import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-displayer',
  templateUrl: './list-displayer.component.html',
  styleUrls: ['./list-displayer.component.css']
})
export class ListDisplayerComponent {
  @Input() list: Array<any>;
}
