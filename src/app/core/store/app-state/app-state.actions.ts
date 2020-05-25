import { createAction } from '@ngrx/store';

export const CONNECTION_ON_CLOSE = 'CONNECTION_ON_CLOSE';
export const CONNECTION_ON_OPEN = 'CONNECTION_ON_OPEN';

export const connectionToUp = createAction(CONNECTION_ON_OPEN);
export const connectionToDown = createAction(CONNECTION_ON_CLOSE);