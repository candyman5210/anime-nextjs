import Image from "next/image";

import React from 'react';

// Type definition for the props that the Home component will receive
interface Anime {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  score: number;
}

// Fetching data directly inside the component
const Home = async () => {
  const res = await fetch('https://api.jikan.moe/v4/top/anime');
  const data = await res.json();
  const animeList: Anime[] = data.data;

  return (
    <div>
      <h1>Trending Anime</h1>
      <div className="grid-container">
        {animeList.map((anime) => (
          <div className="grid-item" key={anime.mal_id}>
            <h2>{anime.title}</h2>
            <img src={anime.images.jpg.image_url} alt={anime.title} />
            <p>Rating: {anime.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporting the Home component as the default export
export default Home;











// export default function Home() {
//   return (
//    <>
    
//    </>
//   );
// }
