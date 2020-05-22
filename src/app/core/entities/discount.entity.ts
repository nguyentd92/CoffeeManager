export class DiscountEntity {
  _id: string;
  type: 'percent' | 'value'; // Discount Mode: Percent or Value
  value: number;
  minValueApply: number; // Min bill total for apply
  maxValueApply: number; // Max bill total for apply
  minQuantityApply: number; // apply for order items
  maxQuantityApply: number; // apply for order items
  applyFor: 'bill' | 'orderItems'; // bill: apply for bill total, orderItems: apply for items
  idItems?: string[];
}
