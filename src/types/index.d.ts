declare type MemoOrders = number[]; // letter index as number

declare interface OrderFilters {
  longVowels: boolean;
  shortVowels: boolean;
  consonantsHigh: boolean;
  consonantsLow: boolean;
  consonantsRare: boolean;
}

interface AppContext {
  orders: MemoOrders;
  filters: OrderFilters;
}
