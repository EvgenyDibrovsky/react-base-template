import React, { useState } from 'react';

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to
// keep file size down
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export default function CountryRegionSelector() {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  return (
    <div className="mb-20 flex flex-col md:flex-row items-center justify-center gap-5">
      <CountryDropdown
        value={country}
        onChange={val => setCountry(val)}
        className="focus:outline-none w-full md:w-4/12 transition-all duration-200 rounded-lg bg-white h-10 border border-black text-black px-2 dark:bg-black dark:text-white dark:border-white"
      />
      <RegionDropdown
        country={country}
        value={region}
        onChange={val => setRegion(val)}
        className="focus:outline-none w-full md:w-4/12 transition-all duration-200 rounded-lg bg-white h-10 border border-black text-black px-2 dark:bg-black dark:text-white dark:border-white"
      />
    </div>
  );
}
