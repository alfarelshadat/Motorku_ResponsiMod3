import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Profile from './pages/Profile';

type Page = 'home' | 'detail' | 'profile';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedMotorcycleId, setSelectedMotorcycleId] = useState<number | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleViewDetail = (id: number) => {
    setSelectedMotorcycleId(id);
    setCurrentPage('detail');
  };

  const handleBack = () => {
    setCurrentPage('home');
    setSelectedMotorcycleId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === 'home' && <Home onViewDetail={handleViewDetail} />}
      {currentPage === 'detail' && selectedMotorcycleId && (
        <Detail motorcycleId={selectedMotorcycleId} onBack={handleBack} />
      )}
      {currentPage === 'profile' && <Profile />}
    </div>
  );
}

export default App;
