export interface Motorcycle {
  id: number;
  name: string;
  brand: string;
  price: number;
  year: number;
  image: string;
  description: string;
  mileage: number;
  engine: string;
  color: string;
  transmission: string;
}

export const motorcycles: Motorcycle[] = [
  {
    id: 1,
    name: "Honda CBR150R",
    brand: "Honda",
    price: 35000000,
    year: 2023,
    image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg",
    description: "Motor sport 150cc dengan desain aerodinamis dan performa tinggi. Cocok untuk pengendara yang menyukai kecepatan dan handling responsif.",
    mileage: 5000,
    engine: "150cc, 4-Stroke",
    color: "Merah",
    transmission: "Manual 6-Speed"
  },
  {
    id: 2,
    name: "Yamaha NMAX",
    brand: "Yamaha",
    price: 32000000,
    year: 2023,
    image: "https://images.pexels.com/photos/1619675/pexels-photo-1619675.jpeg",
    description: "Skutik premium dengan fitur lengkap dan kenyamanan maksimal. Ideal untuk berkendara harian di perkotaan dengan gaya modern.",
    mileage: 3000,
    engine: "155cc, Blue Core",
    color: "Hitam",
    transmission: "Automatic CVT"
  },
  {
    id: 3,
    name: "Kawasaki Ninja 250",
    brand: "Kawasaki",
    price: 65000000,
    year: 2022,
    image: "https://images.pexels.com/photos/2115691/pexels-photo-2115691.jpeg",
    description: "Sport bike 250cc dengan teknologi parallel twin engine. Memberikan akselerasi yang impresif dan desain agresif khas Ninja.",
    mileage: 8000,
    engine: "250cc, Parallel Twin",
    color: "Hijau",
    transmission: "Manual 6-Speed"
  },
  {
    id: 4,
    name: "Suzuki GSX-R150",
    brand: "Suzuki",
    price: 38000000,
    year: 2023,
    image: "https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg",
    description: "Racing sport 150cc dengan chassis ringan dan mesin bertenaga. Dirancang untuk performa maksimal di trek dan jalanan.",
    mileage: 4500,
    engine: "150cc, DOHC",
    color: "Biru",
    transmission: "Manual 6-Speed"
  },
  {
    id: 5,
    name: "Honda PCX 160",
    brand: "Honda",
    price: 33500000,
    year: 2023,
    image: "https://images.pexels.com/photos/1715191/pexels-photo-1715191.jpeg",
    description: "Skutik premium dengan teknologi eSP+ yang irit bahan bakar. Dilengkapi Smart Key System dan desain elegan yang timeless.",
    mileage: 2500,
    engine: "160cc, eSP+",
    color: "Putih",
    transmission: "Automatic CVT"
  },
  {
    id: 6,
    name: "Yamaha Aerox 155",
    brand: "Yamaha",
    price: 29000000,
    year: 2023,
    image: "https://images.pexels.com/photos/1715191/pexels-photo-1715191.jpeg",
    description: "Skutik sporty dengan desain futuristik dan handling lincah. Mesin VVA memberikan tenaga responsif untuk akselerasi cepat.",
    mileage: 6000,
    engine: "155cc, VVA",
    color: "Kuning",
    transmission: "Automatic CVT"
  },
  {
    id: 7,
    name: "Honda Vario 160",
    brand: "Honda",
    price: 26000000,
    year: 2023,
    image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg",
    description: "Skutik legendaris dengan fitur praktis dan efisiensi bahan bakar terbaik. Pilihan tepat untuk mobilitas harian yang ekonomis.",
    mileage: 7500,
    engine: "160cc, eSP",
    color: "Silver",
    transmission: "Automatic CVT"
  },
  {
    id: 8,
    name: "Kawasaki W175",
    brand: "Kawasaki",
    price: 34000000,
    year: 2022,
    image: "https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg",
    description: "Motor klasik dengan desain retro yang elegan. Mesin 175cc memberikan karakter torsi yang mantap untuk berkendara santai.",
    mileage: 10000,
    engine: "175cc, Single Cylinder",
    color: "Coklat",
    transmission: "Manual 5-Speed"
  }
];
