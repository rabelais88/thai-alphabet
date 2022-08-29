import { useParams } from 'react-router-dom';
import alphabets from '../constants/alphabets';
import useMemorize from './useMemorize';

const useLetter = () => {
  const { letter } = useParams();
  const letterIndex = Number(letter);
  const alphabet = alphabets[letterIndex];
  const { orders, saveOrders, tryNewLetter } = useMemorize();
  const setResult = (remembered: boolean) => {
    const q = orders.shift();
    if (!remembered) {
      if (q) orders.push(q);
    }
    saveOrders(orders);
    tryNewLetter();
  };
  return { alphabet, setResult };
};

export default useLetter;
