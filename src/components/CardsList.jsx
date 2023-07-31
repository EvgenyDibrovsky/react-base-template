import dbBrands from '../db/brands.json';
import { useState, useEffect } from 'react';
import CardsListItem from './CardsListItem'; // Предполагая, что компонент CardsListItem находится в той же папке

export default function CardsList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dbBrands);
  }, []);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6">
      {data.map(({ image, title, text, link }, index) => (
        <CardsListItem
          key={index}
          image={image}
          title={title}
          text={text}
          link={link}
        />
      ))}
    </ul>
  );
}
