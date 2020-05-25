import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private nzNotificationService: NzNotificationService) {}

  success({ title, content }: { title: string; content: string }) {
    this.nzNotificationService.create('success', title, content);
  }
}
