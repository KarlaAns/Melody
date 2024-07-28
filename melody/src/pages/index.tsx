import * as React from "react";
import { useState, useEffect } from "react";
import { SongCard } from "../components/SongCard";
import { Header } from "../components/Header";
import axios from 'axios';

const CLIENT_ID = '352717a76cfa46d18108a64a4fba3410';
const CLIENT_SECRET = '454e7d3f3e9742a3b805d791afbd30b0';

const Home: React.FC = () => {
  const [songs, setSongs] = useState<any[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>('Pop');

  React.useEffect(() => {
    const fetchData = async (genre: string) => {
      try {
        const tokenResponse = await axios.post('https://accounts.spotify.com/api/token', null, {
          params: {
            grant_type: 'client_credentials'
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`
          }
        });

        const accessToken = tokenResponse.data.access_token;
        const response = await axios.get(`https://api.spotify.com/v1/recommendations?seed_genres=${genre.toLowerCase()}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        
        setSongs(response.data.tracks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(selectedGenre);
  }, [selectedGenre]);

  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre);
  };
  
  const genres = [
    "Pop",
    "Rock",
    "Jazz",
    "Electronic",
    "Classical",
  ]
  return (
    <div className="flex flex-col pb-20 bg-neutral-950">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <div className="flex flex-row mt-48 ml-10 max-w-full max-md:mt-10">
        <div className="flex flex-col text-white w-[671px] max-md:mt-10">
          <div className="text-7xl max-md:max-w-full max-md:text-4xl">
            Melody.
          </div>
          <div className="mt-4 text-6xl max-md:max-w-full max-md:text-4xl">
            Music for everyone.
          </div>
          <div className="mt-9 text-base font-light leading-7 max-md:max-w-full">
            Explora el extenso mundo de la música y atrévete a escuchar géneros de
            música y a artistas que nunca habías escuchado antes!
          </div>
          <div className="flex gap-5 justify-between self-start mt-16 max-md:mt-10">
            <div className="flex flex-col self-start mt-1.5 text-sm">
              <div>Powered by</div>
              <img
                loading="lazy"
                src="https:/cdn.builder.io/api/v1/image/assets/TEMP/90b269e4a4afbae1f441d1a571da5742db126e188f2b11f283dbcc514b4ed59a?"
                className="self-center mt-2 aspect-[8.33] w-[102px]"
              />
            </div>
            <div className="flex gap-2.5 px-8 py-2.5 text-lg font-light border border-white border-solid rounded-[50px] max-md:px-5">
              <div>Discover More</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/41cdf6651b08f1a04e8fbc9f30ad6b350d71b5ced3924d31c7e4163b4be66bbf?"
                className="shrink-0 my-auto w-6 aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="ml-10">
          <img
            loading="lazy"
            src="/images/image 5.png"
            alt="Descripción de la imagen"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      <div className="flex gap-5 mt-52 text-2xl font-light text-white uppercase max-md:flex-wrap max-md:mt-10">
        <div className="grow my-auto">new way to reach the new fan</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e21107f2dee2ed0838f97058503ba8801abbaf494e426bf4665fd07d6e8c599?"
          className="shrink-0 w-9 aspect-square"
        />
        <div className="flex-auto my-auto">new way to reach the new fan</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e21107f2dee2ed0838f97058503ba8801abbaf494e426bf4665fd07d6e8c599?"
          className="shrink-0 w-9 aspect-square"
        />
        <div className="flex-auto my-auto">new way to reach the new fan</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e21107f2dee2ed0838f97058503ba8801abbaf494e426bf4665fd07d6e8c599?"
          className="shrink-0 w-9 aspect-square"
        />
      </div>
      <div className="mt-5 w-full border border-white border-solid min-h-[1px] max-md:max-w-full" />
      <div className="flex flex-col px-10 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="self-center w-full max-w-[1321px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-12 text-white max-md:mt-10 max-md:max-w-full">
                <div className="text-7xl max-md:max-w-full max-md:text-4xl">
                  ¿Qué es <br />
                  Melody?
                </div>
                <div className="mt-12 text-lg font-light leading-7 max-md:mt-10 max-md:max-w-full">
                  Melody es un aplicación web que proporciona la mejor música de
                  los mejores artistas en un solo lugar, sin anuncios y
                  descargas gratis!
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="..."
                className="grow w-full aspect-[1.12] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="self-center mt-20 w-full max-w-[1171px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="/images/market.png"
                  className="max-w-full shadow-lg rgba(0, 0, 0, 0.3)"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-52 text-lg font-light text-white max-md:mt-10 max-md:max-w-full">
                <div className="text-7xl max-md:max-w-full max-md:text-4xl">
                  Melody Marketplace
                </div>
                <div className="mt-7 leading-7 max-md:max-w-full">
                  Si eres un artista independiente animate a probar el Melody
                  Marketplace y comparte con todos tus canciones originales!
                </div>
                <div className="flex gap-2.5 self-start px-8 py-2.5 mt-36 border border-white border-solid rounded-[50px] max-md:px-5 max-md:mt-10">
                  <div>Explore Marketplace</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/41cdf6651b08f1a04e8fbc9f30ad6b350d71b5ced3924d31c7e4163b4be66bbf?"
                    className="shrink-0 my-auto w-6 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center mt-40 w-full max-w-[1381px] max-md:mt-10 max-md:max-w-full">
          <div className="text-white max-md:ml-0 max-md:max-w-full">
            <div className="text-7xl text-center max-md:text-4xl">
              Tus artistas favoritos
            </div>
            <div className="text-4xl text-center max-md:text-2xl">
              ahora en Melody
            </div>
            <div className="flex gap-4 self-end mt-32 text-base max-md:flex-wrap max-md:mt-10">
              <div className="grow my-auto text-xl">Muisc Genre:</div>
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => handleGenreClick(genre)}
                  className="px-4 py-2 text-lg font-light text-white border border-white rounded-full"
                >
                  {genre}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-20 max-md:mt-10">
              {songs.map((song, index) => (
                <SongCard
                  key={song.id}
                  title={song.name}
                  artist={song.artists.map((artist: any) => artist.name).join(", ")}
                  album={song.album.name}
                  coverUrl={song.album.images[0]?.url || ""}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="self-center w-full max-w-[1321px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col mt-24 text-lg font-light text-white max-md:mt-10 max-md:max-w-full">
              <div className="text-6xl max-md:max-w-full max-md:text-4xl">
                ¡Disfruta de tus canciones <br />
                preferidas sin anuncios!
              </div>
              <div className="mt-7 leading-7 max-md:mt-10 max-md:max-w-full">
                Melody tiene uno de los catálogos más grandes en el mundo de la
                música. ¡Actualizamos diariamente nuestra lista para que
                escuches los últimos hits sin descargar nada!
              </div>
            </div>
            <div className="flex flex-col max-md:ml-0 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8152dca2be265cfa14a510efb730cd83ab62a8ac45f100251fbcb6a83fc3ddfc?"
                className="w-full max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
