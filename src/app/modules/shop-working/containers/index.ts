import { ShopWorkingContainerComponent } from './shop-working-container/shop-working-container.component';
import { MenuOrderContainerComponent } from './menu-order-container/menu-order-container.component';
import { TodayLogsContainerComponent } from './today-logs-container/today-logs-container.component';
import { ShopViewContainerComponent } from './shop-view-container/shop-view-container.component';

export * from './shop-working-container/shop-working-container.component';
export * from './menu-order-container/menu-order-container.component';
export * from './today-logs-container/today-logs-container.component';
export * from './shop-view-container/shop-view-container.component';

export const shopWorkingContainer = [
  ShopWorkingContainerComponent,
  MenuOrderContainerComponent,
  TodayLogsContainerComponent,
  ShopViewContainerComponent,
];
