import { Injectable } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Injectable({
  providedIn: 'root'
})
export class OpenModalService {

  constructor(private nzModalService: NzModalService) { }

  createModal() {
    
  }
}
