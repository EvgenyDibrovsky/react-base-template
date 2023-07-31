import React, { useState } from 'react';

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to
// keep file size down
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export default function CountryRegionSelector() {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  return (
    <div className="mb-20">
      <CountryDropdown value={country} onChange={val => setCountry(val)} />
      <RegionDropdown
        country={country}
        value={region}
        onChange={val => setRegion(val)}
      />
    </div>
  );
}
