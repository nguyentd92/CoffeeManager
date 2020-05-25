export class DrinkEntity {
  _id: string;
  code: string;
  name: string;
  shortName?: string;
  imgCoverUrl?: string;
  imgUrls?: string[];
  sizePrices: DrinkSizePrice;
}

export interface DrinkSizePrice {
  [sizeName: string]: number
}
