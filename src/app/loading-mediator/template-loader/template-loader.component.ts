import {Component, EmbeddedViewRef, Input, OnInit, TemplateRef, ViewContainerRef, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-template-loader',
  templateUrl: './template-loader.component.html'
})
export class TemplateLoaderComponent implements OnInit, OnDestroy {
  @Input() template: TemplateRef<any>;
  @Input() data: any;

  view: EmbeddedViewRef<any>;

  constructor(public viewContainer: ViewContainerRef) {
  }

  ngOnInit() {
    if (this.template) {
      this.view = this.viewContainer.createEmbeddedView(this.template, {
        '\$implicit': this.data
      });
    }
  }

  ngOnDestroy() {
    if (this.view) {
      this.view.destroy();
    }
  }
}
