import { motorcycles } from '../data/motorcycles';
import MotorcycleCard from '../components/MotorcycleCard';

interface HomeProps {
  onViewDetail: (id: number) => void;
}

export default function Home({ onViewDetail }: HomeProps) {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Marketplace Motor Terpercaya</h1>
          <p className="text-lg text-blue-100">Temukan motor impian Anda dengan harga terbaik</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Pilihan Motor</h2>
          <p className="text-gray-600">{motorcycles.length} motor tersedia</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {motorcycles.map((motorcycle) => (
            <MotorcycleCard
              key={motorcycle.id}
              motorcycle={motorcycle}
              onViewDetail={onViewDetail}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
