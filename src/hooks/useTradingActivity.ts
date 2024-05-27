import { useQuery } from 'react-query';
import { fetchTradingActivity } from '../services/api';

const useTradingActivity = () => {
  return useQuery('tradingActivity', fetchTradingActivity);
};

export default useTradingActivity;
