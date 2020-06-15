import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  private sidebarStatus = new BehaviorSubject<string>('');
  static changeSidebarStatus: any;

  changeSidebarStatus() {
    var currentState = this.sidebarStatus.getValue();
    var nextState = currentState === '' ? 'open' : '';
    this.sidebarStatus.next(nextState);
  }
  constructor() { }
}
