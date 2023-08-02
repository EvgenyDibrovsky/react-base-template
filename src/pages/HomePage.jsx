import CardsList from '../components/CardsList';
import CountryRegionSelector from '../components/CountryRegionSelector';
import { useState } from 'react';

export default function HomePage() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedRegion, setSelectedRegion] = useState(''); // добавьте это

  return (
    <div>
      <CountryRegionSelector
        onCountryChange={setSelectedCountry}
        onRegionChange={setSelectedRegion}
      />{' '}
      {/* передайте setSelectedRegion в качестве пропа */}
      <CardsList country={selectedCountry} region={selectedRegion} />{' '}
      {/* передайте selectedRegion в качестве пропа */}
    </div>
  );
}
