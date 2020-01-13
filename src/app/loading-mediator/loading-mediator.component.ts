import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-loading-mediator',
  template: `
    <span *ngIf="!loadedData; else data_display">
      <app-spinner></app-spinner>
    </span>
    <ng-template #data_display>
      <app-template-loader [template]="template" [data]="loadedData"></app-template-loader>
    </ng-template>
  `
})
export class LoadingMediatorComponent implements OnInit {
  @Input() public template: TemplateRef<any>;
  @Input() dataObservable: Observable<any>;
  loadedData: number;

  ngOnInit() {
    this.dataObservable.subscribe(
      data => this.loadedData = data
    );
  }
}
