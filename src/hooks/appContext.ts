import React, { createContext, useContext } from 'react';

export const appContext = createContext<AppContext>({} as AppContext);
export const AppContextProvider = appContext.Provider;
export const useAppContext = () => {
  const context = useContext(appContext) as AppContext & {
    setOrders: React.Dispatch<React.SetStateAction<MemoOrders>>;
    setFilters: React.Dispatch<React.SetStateAction<OrderFilters>>;
  };
  return context;
};
