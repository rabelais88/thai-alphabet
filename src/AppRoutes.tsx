import { useRoutes } from 'react-router-dom';
import Letter from './pages/Letter';
import Main from './pages/Main';

const routes: Parameters<typeof useRoutes>[0] = [
  { path: '/', element: <Main /> },
  { path: '/letter/:letter', element: <Letter /> },
];

const AppRoutes = () => {
  return useRoutes(routes);
};

export default AppRoutes;
