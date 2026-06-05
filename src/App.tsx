import { Analytics } from '@vercel/analytics/react';
import { PortfolioPage } from './pages/PortfolioPage';

export default function App() {
  return (
    <>
      <PortfolioPage />
      <Analytics />
    </>
  );
}
