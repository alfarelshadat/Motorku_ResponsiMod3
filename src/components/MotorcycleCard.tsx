import { Motorcycle } from '../data/motorcycles';

interface MotorcycleCardProps {
  motorcycle: Motorcycle;
  onViewDetail: (id: number) => void;
}

export default function MotorcycleCard({ motorcycle, onViewDetail }: MotorcycleCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={motorcycle.image}
          alt={motorcycle.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {motorcycle.brand}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-1">{motorcycle.name}</h3>

        <p className="text-sm text-gray-600 mb-2">{motorcycle.year} • {motorcycle.mileage.toLocaleString('id-ID')} km</p>

        <p className="text-xl font-bold text-blue-600 mb-4">{formatPrice(motorcycle.price)}</p>

        <button
          onClick={() => onViewDetail(motorcycle.id)}
          className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );
}
