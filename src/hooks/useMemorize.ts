import { useNavigate } from 'react-router-dom';
import alphabets from '../constants/alphabets';
const useMemorize = () => {
  const navigate = useNavigate();
  return () => {
    const index = Math.ceil(Math.random() * alphabets.length - 1);
    navigate(`/letter/${index}`);
  };
};

export default useMemorize;
