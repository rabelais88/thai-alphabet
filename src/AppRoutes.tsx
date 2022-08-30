import { useRoutes } from 'react-router-dom';
import NoLetter from './components/NoLetter';
import Letter from './pages/Letter';
import LettersConfusing from './pages/LettersConfusing';
import Main from './pages/Main';
import Stats from './pages/Stats';

const routes: Parameters<typeof useRoutes>[0] = [
  { path: '/', element: <Main /> },
  { path: '/letter/:letter', element: <Letter /> },
  { path: '/stats', element: <Stats /> },
  { path: '/no-letter', element: <NoLetter /> },
  { path: '/letters-confusing', element: <LettersConfusing /> },
];

const AppRoutes = () => {
  return useRoutes(routes);
};

export default AppRoutes;
