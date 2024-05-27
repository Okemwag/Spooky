import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import EmissionSummary from './pages/EmissionSummary';
import TradingActivity from './pages/TradingActivity';
import ComplianceStatus from './pages/ComplianceStatus';
import Settings from './pages/Settings';
import MainLayout from './layouts/MainLayout';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="emission-summary" element={<EmissionSummary />} />
          <Route path="trading-activity" element={<TradingActivity />} />
          <Route path="compliance-status" element={<ComplianceStatus />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
