import { User, Mail, Hash, Users } from 'lucide-react';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-32"></div>

          <div className="relative px-8 pb-8">
            <div className="flex flex-col items-center -mt-16 mb-6">
              <div className="bg-white rounded-full p-2 shadow-lg">
                <div className="bg-blue-600 rounded-full p-6">
                  <User className="h-20 w-20 text-white" />
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Profil Mahasiswa</h1>
              <p className="text-gray-600">Informasi Pembuat Aplikasi</p>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="bg-blue-100 rounded-full p-3">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 font-medium">Nama</p>
                  <p className="text-lg font-bold text-gray-800">Alfarel Nawall Putra Shadat</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="bg-blue-100 rounded-full p-3">
                  <Hash className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 font-medium">NIM</p>
                  <p className="text-lg font-bold text-gray-800">21120123140140</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="bg-blue-100 rounded-full p-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 font-medium">Kelompok</p>
                  <p className="text-lg font-bold text-gray-800">26</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
