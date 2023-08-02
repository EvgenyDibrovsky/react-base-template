// import CardsList from '../components/CardsList';
// import CountryRegionSelector from '../components/CountryRegionSelector';
// import { useState } from 'react';

// export default function HomePage() {
//   const [selectedCountry, setSelectedCountry] = useState(''); // добавьте это

//   return (
//     <div className="h-[calc(100vh-20rem)]">
//       <CountryRegionSelector onCountryChange={setSelectedCountry} />{' '}
//       {/* передайте setSelectedCountry в качестве пропа */}
//       <CardsList country={selectedCountry} />{' '}
//       {/* передайте selectedCountry в качестве пропа */}
//     </div>
//   );
// }
import CardsList from '../components/CardsList';
import CountryRegionSelector from '../components/CountryRegionSelector';
import { useState } from 'react';

export default function HomePage() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedRegion, setSelectedRegion] = useState(''); // добавьте это

  return (
    <div className="h-[calc(100vh-20rem)]">
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
