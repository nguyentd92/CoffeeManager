import { UserEntity } from './user.entity';
import { OrderItem, Discount } from './order-item.entity';

export interface UserInfo {
  id: string; // Map to User Entity
  name: string; // User display name on bill, etc
}

export class BillEntity {
  _id: string;
  discountId: string;
  discountValue: number;
  orderItems: OrderItem[];
  subTotal: number;
  tax: number = 0;
  total: number;
  customer: UserInfo;
  counter: UserInfo;
  billDate: Date;
}