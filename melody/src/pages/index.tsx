import * as React from "react";
import { useState, useEffect } from "react";
import { SongCard } from "../components/SongCard";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import GradientEllipses from "../components/GradientEllipses";
import Ellipse21 from "../components/Ellipse21";
import Marquee from "../components/Marquee";
import {
  spotifyApi,
  loginUrl,
  getTokenFromUrl,
  setAccessToken,
} from "../utils/spotify";
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const [songs, setSongs] = useState<SpotifyApi.TrackObjectFull[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>("Pop");
  const [token, setToken] = useState<string | null>(null);
  const [player, setPlayer] = useState<Spotify.Player | null>(null);
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('spotify_access_token');
    

    if (token) {
      setToken(token);
      setAccessToken(token);

      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;

      document.body.appendChild(script);

      window.onSpotifyWebPlaybackSDKReady = () => {
        const player = new Spotify.Player({
          name: "Melody Web Player",
          getOAuthToken: (cb) => {
            cb(token);
          },
        });

        setPlayer(player);

        player.addListener("ready", ({ device_id }) => {
          console.log("Ready with Device ID", device_id);
          setDeviceId(device_id);
        });

        player.addListener("not_ready", ({ device_id }) => {
          console.log("Device ID has gone offline", device_id);
        });

        player.addListener("initialization_error", ({ message }) => {
          console.error("Failed to initialize", message);
        });

        player.addListener("authentication_error", ({ message }) => {
          console.error("Failed to authenticate", message);
        });

        player.addListener("account_error", ({ message }) => {
          console.error("Failed to validate Spotify account", message);
        });

        player.connect().then((success) => {
          if (success) {
            console.log(
              "The Web Playback SDK successfully connected to Spotify!"
            );
          }
        });
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  useEffect(() => {
    if (!token) return;

    const fetchData = async (genre: string) => {
      try {
        const response = await spotifyApi.getRecommendations({
          seed_genres: [genre.toLowerCase()],
        });
        setSongs(response.tracks as SpotifyApi.TrackObjectFull[]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(selectedGenre);
  }, [selectedGenre, token]);

  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre);
  };

  const handlePlay = async (trackUri: string) => {
    if (player && deviceId) {
      try {
        await spotifyApi.play({
          device_id: deviceId,
          uris: [trackUri],
        });
      } catch (error) {
        console.error("Error playing track:", error);
      }
    } else {
      console.error("Player or device ID not available");
    }
  };

  

  const genres = ["Pop", "Rock", "Jazz", "Electronic", "Classical"];

  if (!token) {
    return (
      <div className="flex items-center justify-center h-screen bg-neutral-950">
        <a
          href={loginUrl}
          className="px-6 py-3 text-white bg-green-500 rounded-full hover:bg-green-600"
        >
          Login with Spotify
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col pb-20 bg-neutral-950 overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <GradientEllipses />

      <div className="flex flex-row mt-48 ml-10 max-w-full max-md:mt-10 relative z-20">
        <div className="flex flex-col text-white w-[671px] max-md:mt-10">
          <div className="text-7xl max-md:max-w-full max-md:text-4xl">
            Melody.
          </div>
          <div className="mt-4 text-6xl max-md:max-w-full max-md:text-4xl">
            Music for everyone.
          </div>
          <div className="mt-9 text-base font-light leading-7 max-md:max-w-full">
            Explora el extenso mundo de la música y atrévete a escuchar géneros
            de música y a artistas que nunca habías escuchado antes!
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
        <div className="relative ml-10 ">
          <img
            loading="lazy"
            src="/images/image 5.png"
            alt="Descripción de la imagen"
            className="max-w-[550px] h-auto absolute top-[-190px] left-[25px] z-6"
          />
        </div>
      </div>
      {/*  */}
      <Marquee />
      <div className="flex flex-col px-10 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="self-center w-full max-w-[1321px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col ">
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
            <Ellipse21 />
            <div className="grow max-md:mt-10 max-md:max-w-full z-0 p-0 m-0">
              <img
                loading="lazy"
                srcSet="/images/queesmelody.png"
                className="w-full h-auto shadow-lg"
                style={{ display: "block" }} // Elimina el margen interno si está presente
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
              {songs.map((song) => (
                <SongCard
                  key={song.id}
                  title={song.name}
                  artist={song.artists.map((artist) => artist.name).join(", ")}
                  album={song.album.name}
                  coverUrl={song.album.images[0]?.url || ""}
                  songUri={song.uri}
                  onPlay={handlePlay}
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
