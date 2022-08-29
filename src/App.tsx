import { Box, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
