import {Component} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataSubject = new Subject<any>();
  dataObservable = this.dataSubject.asObservable();

  simulateDataLoadFinish(event: Event) {
    const names = ['Oren', 'Yana', 'Ofek'];
    this.dataSubject.next(names);
  }
}
