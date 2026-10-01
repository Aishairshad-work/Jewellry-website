import React from 'react';
import ReactDOM from 'react-dom/client';
import { WizzTechProtectionProvider } from '@wizztech/protection';
import '@wizztech/protection/dist/style.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WizzTechProtectionProvider
      platformUrl={import.meta.env.VITE_WIZZTECH_PLATFORM_URL}
    >
      <App />
    </WizzTechProtectionProvider>
  </React.StrictMode>
);
