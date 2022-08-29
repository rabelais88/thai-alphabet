import { useNavigate } from 'react-router-dom';
import alphabets from '../constants/alphabets';
import _shuffle from 'lodash/shuffle';
import { useState } from 'react';
type MemoOrder = number[]; // letter index as number

const useMemorize = () => {
  const [orders, setOrders] = useState<MemoOrder>(
    JSON.parse(localStorage.getItem('orders') ?? '[]')
  );
  const navigate = useNavigate();

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
    localStorage.setItem('orders', JSON.stringify(orders));
  };
  const resetOrders = () => {
    saveOrders(
      _shuffle(Array.from({ length: alphabets.length }).map((_, i) => i))
    );
  };
  const tryNewLetter = () => {
    if (orders.length === 0) resetOrders();
    navigate(`/letter/${orders[0]}`);
    window.scrollTo(0, 0);
  };
  return {
    tryNewLetter,
    showList,
    showStats,
    orders,
    saveOrders,
    resetOrders,
  };
};

export default useMemorize;
