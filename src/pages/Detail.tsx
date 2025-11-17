import { ArrowLeft, Calendar, Gauge, Palette, Cog, Fuel } from 'lucide-react';
import { motorcycles, Motorcycle } from '../data/motorcycles';

interface DetailProps {
  motorcycleId: number;
  onBack: () => void;
}

export default function Detail({ motorcycleId, onBack }: DetailProps) {
  const motorcycle = motorcycles.find((m) => m.id === motorcycleId);

  if (!motorcycle) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Motor tidak ditemukan</h2>
          <button
            onClick={onBack}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Kembali ke Home
          </button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Kembali</span>
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96 bg-gray-200">
            <img
              src={motorcycle.image}
              alt={motorcycle.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <div className="mb-4">
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded">
                {motorcycle.brand}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-2">{motorcycle.name}</h1>

            <p className="text-3xl font-bold text-blue-600 mb-6">{formatPrice(motorcycle.price)}</p>

            <div className="border-t border-gray-200 pt-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Spesifikasi</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Tahun</p>
                    <p className="font-semibold text-gray-800">{motorcycle.year}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Gauge className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Jarak Tempuh</p>
                    <p className="font-semibold text-gray-800">{motorcycle.mileage.toLocaleString('id-ID')} km</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Fuel className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Mesin</p>
                    <p className="font-semibold text-gray-800">{motorcycle.engine}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Palette className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Warna</p>
                    <p className="font-semibold text-gray-800">{motorcycle.color}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg md:col-span-2">
                  <Cog className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Transmisi</p>
                    <p className="font-semibold text-gray-800">{motorcycle.transmission}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Deskripsi</h2>
              <p className="text-gray-700 leading-relaxed">{motorcycle.description}</p>
            </div>

            <div className="mt-8">
              <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition-colors">
                Hubungi Penjual
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
