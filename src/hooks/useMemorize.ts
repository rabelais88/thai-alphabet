import { useNavigate } from 'react-router-dom';
import alphabets from '../constants/alphabets';
import _shuffle from 'lodash/shuffle';
import { useState } from 'react';
type MemoOrder = number[]; // letter index as number

interface OrderFilters {
  longVowels: boolean;
  shortVowels: boolean;
  consonantsHigh: boolean;
  consonantsLow: boolean;
  consonantsRare: boolean;
}

const useMemorize = () => {
  const [orders, setOrders] = useState<MemoOrder>(
    JSON.parse(localStorage.getItem('orders') ?? '[]')
  );
  const [filters, setFilters] = useState<OrderFilters>(
    JSON.parse(localStorage.getItem('filters') ?? '{}')
  );
  const navigate = useNavigate();
  const saveFilters = (orderFilters: Partial<OrderFilters>) => {
    const _filters = { ...filters, ...orderFilters };
    localStorage.setItem('filters', JSON.stringify(_filters));
    setFilters(_filters);
    const newOrders = resetOrders(_filters);
    console.log(_filters);
    saveOrders(newOrders);
    return { filters: _filters, newOrders };
  };

  const showList = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };
  const showStats = () => {
    navigate('/stats');
    window.scrollTo(0, 0);
  };
  const saveOrders = (newOrders: MemoOrder) => {
    setOrders(newOrders);
    localStorage.setItem('orders', JSON.stringify(newOrders));
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
  };
};

export default useMemorize;
