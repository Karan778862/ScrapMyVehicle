export const vehicleBrands = {
  Car: [
    {
      name: 'Maruti Suzuki',
      models: ['Swift', 'Wagon R', 'Alto 800', 'Dzire', 'Baleno', 'Zen', '800', 'Omni', 'Ritz', 'SX4', 'Ciaz', 'Ertiga', 'Brezza', 'Celerio', 'A-Star', 'Estilo']
    },
    {
      name: 'Hyundai',
      models: ['Santro', 'i10', 'Grand i10', 'i20', 'Verna', 'Accent', 'Getz', 'Creta', 'Eon', 'Elantra', 'Tucson', 'Xcent']
    },
    {
      name: 'Tata',
      models: ['Indica', 'Indigo', 'Nano', 'Tiago', 'Tigor', 'Nexon', 'Safari', 'Sumo', 'Manza', 'Bolt', 'Zest', 'Altroz', 'Harrier']
    },
    {
      name: 'Honda',
      models: ['City', 'Civic', 'Brio', 'Amaze', 'Jazz', 'Accord', 'CR-V', 'Mobilio', 'WR-V', 'BR-V']
    },
    {
      name: 'Mahindra',
      models: ['Scorpio', 'Bolero', 'XUV500', 'Xylo', 'Thar', 'KUV100', 'TUV300', 'Quanto', 'Verito', 'Logan', 'Marazzo', 'XUV300']
    },
    {
      name: 'Toyota',
      models: ['Innova', 'Corolla Altis', 'Etios', 'Etios Liva', 'Fortuner', 'Qualis', 'Camry', 'Yaris', 'Glanza', 'Urban Cruiser']
    },
    {
      name: 'Ford',
      models: ['Figo', 'Ikon', 'Fiesta', 'EcoSport', 'Endeavour', 'Aspire', 'Fusion', 'Mondeo']
    },
    {
      name: 'Volkswagen',
      models: ['Polo', 'Vento', 'Jetta', 'Passat', 'Ameo', 'Taigun', 'T-Roc']
    },
    {
      name: 'Chevrolet',
      models: ['Beat', 'Spark', 'Cruze', 'Tavera', 'Optra', 'Aveo', 'Sail', 'Enjoy', 'Captiva']
    },
    {
      name: 'Renault',
      models: ['Kwid', 'Duster', 'Pulse', 'Scala', 'Lodgy', 'Triber', 'Kiger']
    },
    {
      name: 'Skoda',
      models: ['Octavia', 'Laura', 'Rapid', 'Fabia', 'Superb', 'Kushaq', 'Slavia']
    },
    {
      name: 'Nissan',
      models: ['Micra', 'Sunny', 'Terrano', 'Magnite', 'Kicks', 'Evalia', 'Teana']
    }
  ],
  Bike: [
    { name: 'Hero', models: ['Splendor', 'Passion', 'HF Deluxe', 'Glamour', 'Xtreme', 'Pleasure', 'Maestro'] },
    { name: 'Honda', models: ['Activa', 'Shine', 'Unicorn', 'Dio', 'Hornet', 'Aviator', 'CBR'] },
    { name: 'Bajaj', models: ['Pulsar', 'Discover', 'Platina', 'Avenger', 'Dominar', 'CT 100'] },
    { name: 'TVS', models: ['Apache', 'Jupiter', 'Star City', 'Victor', 'Scooty Pep', 'Ntorq'] },
    { name: 'Royal Enfield', models: ['Classic 350', 'Bullet 350', 'Meteor', 'Thunderbird', 'Himalayan'] },
    { name: 'Yamaha', models: ['FZ', 'R15', 'Fascino', 'Ray ZR', 'MT-15'] },
    { name: 'Suzuki', models: ['Access', 'Gixxer', 'Burgman', 'Hayate', 'Intruder'] }
  ],
  Truck: [
    { name: 'Tata Motors', models: ['Ace', '407', 'Signa', 'Prima', 'Yodha', 'Ultra'] },
    { name: 'Ashok Leyland', models: ['Dost', 'Partner', 'Ecomet', 'Bada Dost', 'Boss'] },
    { name: 'Mahindra', models: ['Bolero Pik-Up', 'Furio', 'Blazo', 'Supro', 'Jeeto'] },
    { name: 'Eicher', models: ['Pro 2000', 'Pro 3000', 'Pro 6000', 'Starline'] },
    { name: 'BharatBenz', models: ['1217', '1923', '2823', '3523'] }
  ],
  '3 Wheeler': [
    { name: 'Bajaj', models: ['RE', 'Maxima', 'Compact'] },
    { name: 'Piaggio', models: ['Ape', 'Ape Auto Plus', 'Ape City'] },
    { name: 'Mahindra', models: ['Alfa', 'Treo', 'Treo Zor'] },
    { name: 'TVS', models: ['King', 'King Duramax'] },
    { name: 'Atul', models: ['Gem', 'Rik', 'Elite'] }
  ]
};

export const vehicleYears = Array.from({ length: 30 }, (_, i) => 2024 - i);

export const vehicleConditions = [
  { id: 'old', label: '10-15+ Years Old', multiplier: 1.0 },
  { id: 'damaged', label: 'Accidental / Body Damaged', multiplier: 0.85 },
  { id: 'non_running', label: 'Engine / Non-Running Issue', multiplier: 0.9 },
  { id: 'scrap', label: 'Total Scrap / Flood Damaged', multiplier: 0.75 }
];

export function calculateScrapEstimate(brand, model, year, condition = 'old') {
  // Base scrap steel weight & spare parts value calculation
  let basePrice = 38000;
  
  if (['Toyota', 'Mahindra', 'Ford'].includes(brand)) {
    basePrice = 58000; // heavier SUV/MUV body metal
  } else if (['Honda', 'Volkswagen', 'Skoda'].includes(brand)) {
    basePrice = 46000;
  } else if (['Tata', 'Hyundai'].includes(brand)) {
    basePrice = 42000;
  }

  // Adjust for year
  const age = 2026 - (parseInt(year) || 2012);
  const ageFactor = Math.max(0.7, 1.2 - (age * 0.02));
  
  const conditionObj = vehicleConditions.find(c => c.id === condition) || vehicleConditions[0];
  const finalPrice = Math.round(basePrice * ageFactor * conditionObj.multiplier);
  
  const minRange = Math.round(finalPrice * 0.92 / 500) * 500;
  const maxRange = Math.round(finalPrice * 1.15 / 500) * 500;

  return {
    min: minRange,
    max: maxRange,
    formattedRange: `₹${minRange.toLocaleString('en-IN')} - ₹${maxRange.toLocaleString('en-IN')}`,
    approxWeight: ['Innova', 'Scorpio', 'Safari', 'Fortuner', 'Endeavour'].includes(model) ? '1,650 - 2,100 kg' : '950 - 1,350 kg'
  };
}
