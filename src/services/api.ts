import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.carbonswap.io/v1',
});

export const fetchEmissionData = async () => {
  const response = await api.get('/emission-data');
  return response.data;
};

export const fetchTradingActivity = async () => {
  const response = await api.get('/trading-activity');
  return response.data;
};

export const fetchComplianceStatus = async () => {
  const response = await api.get('/compliance-status');
  return response.data;
};
