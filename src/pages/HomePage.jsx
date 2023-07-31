import CardsList from '../components/CardsList';
import CountryRegionSelector from '../components/CountryRegionSelector';

export default function HomePage() {
  return (
    <>
      <CountryRegionSelector />
      <CardsList />
    </>
  );
}
