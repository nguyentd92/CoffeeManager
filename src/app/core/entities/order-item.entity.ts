import { DrinkSizePrice } from './drink.entity';

export class OrderItem {
  drinkId: string; // Map to DrinkEntity
  title: string; // Title of order items
  quantity: number; // Quantity Of Items
  size: DrinkSizePrice; // Size Price
  discount: Discount; // Discount Info
  discountValue: number; // Currency value discount
  notes: string[]; // Note of drink
}

export interface Discount {
  type: 'percent' | 'value';
  value: number;
}
