import { Component } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';
import { Store } from '@ngrx/store';
import { AppState } from './core';
import * as fromStore from './core/store';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Coffee';
  env = environment.production

  constructor(
    private connectionService: ConnectionService,
    private appStore: Store<AppState>,
  ) {
    this.connectionService
      .monitor()
      .subscribe((isConnect) =>
        this.appStore.dispatch(
          isConnect ? fromStore.connectionToUp() : fromStore.connectionToDown()
        )
      );
  }
}
