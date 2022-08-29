declare type MemoOrders = number[]; // letter index as number

declare interface OrderFilters {
  longVowels: boolean;
  shortVowels: boolean;
  consonantsHigh: boolean;
  consonantsLow: boolean;
  consonantsRare: boolean;
}

declare type LetterMode = 'traditional' | 'modern' | 'all';
interface AppContext {
  orders: MemoOrders;
  filters: OrderFilters;
  letterMode: LetterMode;
}
