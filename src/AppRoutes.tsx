import { useRoutes } from 'react-router-dom';
import NoLetter from './components/NoLetter';
import Letter from './pages/Letter';
import Main from './pages/Main';
import Stats from './pages/Stats';

const routes: Parameters<typeof useRoutes>[0] = [
  { path: '/', element: <Main /> },
  { path: '/letter/:letter', element: <Letter /> },
  { path: '/stats', element: <Stats /> },
  { path: '/no-letter', element: <NoLetter /> },
];

const AppRoutes = () => {
  return useRoutes(routes);
};

export default AppRoutes;
