import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddUser: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddUser(){
    this.showAddUser = !this.showAddUser;
    this.subject.next(this.showAddUser);
  }

  onToggle(){
    return this.subject.asObservable();
  }
}
