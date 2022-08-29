import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';
import theme from './styles/theme';
import TopBar from './components/TopBar';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <TopBar />
        <AppRoutes />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
