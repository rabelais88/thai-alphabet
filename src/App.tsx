import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';
import theme from './styles/theme';
import TopBar from './components/TopBar';
import { useEffect, useState } from 'react';
import { AppContextProvider } from './hooks/appContext';

function App() {
  const [orders, setOrders] = useState<MemoOrders>(
    JSON.parse(localStorage.getItem('orders') ?? '[]')
  );
  const [filters, setFilters] = useState<OrderFilters>(
    JSON.parse(localStorage.getItem('filters') ?? '{}')
  );
  const [letterMode, setLetterMode] = useState<LetterMode>(
    (localStorage.getItem('lettermode') ?? 'all') as LetterMode
  );
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);
  useEffect(() => {
    localStorage.setItem('filters', JSON.stringify(filters));
  }, [filters]);
  useEffect(() => {
    localStorage.setItem('lettermode', letterMode);
  }, [letterMode]);
  return (
    <BrowserRouter>
      <AppContextProvider
        value={
          {
            orders,
            filters,
            letterMode,
            setOrders,
            setFilters,
            setLetterMode,
          } as AppContext
        }
      >
        <ChakraProvider theme={theme}>
          <TopBar />
          <AppRoutes />
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
