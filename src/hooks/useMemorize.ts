import { useNavigate } from 'react-router-dom';
import alphabets from '../constants/alphabets';
import _shuffle from 'lodash/shuffle';
import { useAppContext } from './appContext';

const useMemorize = () => {
  const navigate = useNavigate();
  const { filters, setFilters, orders, setOrders, letterMode, setLetterMode } =
    useAppContext();
  const saveFilters = (orderFilters: Partial<OrderFilters>) => {
    const _filters = { ...filters, ...orderFilters };
    setFilters(_filters);
    const newOrders = resetOrders(_filters);
    saveOrders(newOrders);
    return { filters: _filters, newOrders };
  };

  const tryConfusingLetters = () => {
    navigate('/letters-confusing');
    window.scrollTo(0, 0);
  };
  const showList = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };
  const showStats = () => {
    navigate('/stats');
    window.scrollTo(0, 0);
  };
  const saveOrders = (newOrders: MemoOrders) => {
    setOrders(newOrders);
    return newOrders;
  };
  const resetOrders = (_filters?: Partial<OrderFilters>) => {
    const f = { ...filters, ..._filters };
    const newOrders = _shuffle(
      Array.from({ length: alphabets.length }).map((_, i) => i)
    ).filter((i) => {
      // letter
      const l = alphabets[i];
      if (f.longVowels && l.type === 'long vowel') return true;
      if (f.shortVowels && l.type === 'short vowel') return true;
      const occurrence = Number(l['occurrence-percentage']);
      if (f.consonantsHigh && occurrence >= 10) return true;
      if (f.consonantsLow && occurrence >= 1) return true;
      if (f.consonantsRare && l.type === 'consonant' && occurrence < 1)
        return true;
      return false;
    });
    saveOrders(newOrders);
    return newOrders;
  };
  const tryNewLetter = () => {
    let nextIndex = orders[0];
    if (orders.length === 0) {
      nextIndex = resetOrders()[0];
    }
    if (nextIndex === undefined || orders.length === 0) {
      navigate('/no-letter');
      window.scrollTo(0, 0);
      return;
    }
    navigate(`/letter/${nextIndex}`);
    window.scrollTo(0, 0);
  };
  return {
    tryNewLetter,
    showList,
    showStats,
    orders,
    saveOrders,
    resetOrders,
    saveFilters,
    filters,
    letterMode,
    setLetterMode,
    tryConfusingLetters,
  };
};

export default useMemorize;
