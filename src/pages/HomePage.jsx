import CardsList from '../components/CardsList';
import CountryRegionSelector from '../components/CountryRegionSelector';

export default function HomePage() {
  return (
    <div className="h-[calc(100vh-20rem)]">
      <CountryRegionSelector />
      <CardsList />
    </div>
  );
}
