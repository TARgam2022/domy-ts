import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private statusSubject = new Subject<number>();
  status$ = this.statusSubject.asObservable();

  updateStatus(status: number) {
    this.statusSubject.next(status);
  }
}