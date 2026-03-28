import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Dashboard from './pages/Dashboard';
import Inbox from './pages/Inbox';
import EmailDetail from './pages/EmailDetail';
import KnowledgeBase from './pages/KnowledgeBase';
import { ToastProvider } from './components/Toast';

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <div className="flex bg-surface min-h-screen text-on-surface">
          <Sidebar />
          <TopNav />
          <div className="flex-1 w-full relative">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/email/:id" element={<EmailDetail />} />
              <Route path="/kb" element={<KnowledgeBase />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
