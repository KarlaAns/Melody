import React from 'react';
import Layout from './LayoutDashB';
import MusicGenre from '../components/MusicGenre';
import PlaylistCard from '../components/PlaylistCard';
import ArtistCard from '../components/ArtistCard';
import Ellipse21 from '../components/Ellipse21';
import Marquee from '../components/Marquee';


const Dashboard: React.FC = () => {
  const playlistImages = [
    'https://cdn.builder.io/api/v1/image/assets/TEMP/000257b22ea6ec7c400b3623f58b3c10d1bc83e3540feefe740eb5756ef0a8b0?apiKey=a78f6d67d7bc412983425b620122d734&&apiKey=a78f6d67d7bc412983425b620122d734',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/4b27d272aaf0d75855ac2245d2ce4a7a2b599fb6737d9e297f78ba4679797a35?apiKey=a78f6d67d7bc412983425b620122d734&&apiKey=a78f6d67d7bc412983425b620122d734',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/df1639154a16237cc4b43951feffccb9a9953fb4c2c28fab4459d2998d262f77?apiKey=a78f6d67d7bc412983425b620122d734&&apiKey=a78f6d67d7bc412983425b620122d734',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/0bba310d9d01f38d658883cbd99c2170acdfb057ff8c5a763f6e7a798dcb4c95?apiKey=a78f6d67d7bc412983425b620122d734&&apiKey=a78f6d67d7bc412983425b620122d734',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/cd8d40ca26506b4afa5827a54e3218d7d0339497e487ca689fc8572c2a491bfb?apiKey=a78f6d67d7bc412983425b620122d734&&apiKey=a78f6d67d7bc412983425b620122d734',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/256911bbd183eaf906009d7b3eeacd71bab8443cc354014816289a785ee28c70?apiKey=a78f6d67d7bc412983425b620122d734&&apiKey=a78f6d67d7bc412983425b620122d734',
  ];

  const artists = [
    { name: 'Dua lipa', imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/51b017b733ff2a410f99085b57006f69175c8848c7f09ae6ed9e1a98170dc76b?apiKey=a78f6d67d7bc412983425b620122d734&&apiKey=a78f6d67d7bc412983425b620122d734' },
    { name: 'Halsey', imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a46fcb00d11880e90a9f7c57a4019e93834a182e9a1014fc142c3115e2754d54?apiKey=a78f6d67d7bc412983425b620122d734&&apiKey=a78f6d67d7bc412983425b620122d734' },
    { name: 'Selena Gomez', imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b3b758ed8cec5dda3fd1dc7961b158139be79fa477381b1d8deb8c325aa24ca4?apiKey=a78f6d67d7bc412983425b620122d734&&apiKey=a78f6d67d7bc412983425b620122d734' },
    { name: 'Ariana', imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb6bd24ad581bfa5df9efc2f4556e3c07ddfc8410751d60398cb2da6741b36ac?apiKey=a78f6d67d7bc412983425b620122d734&&apiKey=a78f6d67d7bc412983425b620122d734' },
    { name: 'Jackson', imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4992d9fc0f7627eefcbcf1e3ea58685d70293a90d421cf85d4013d86c512937e?apiKey=a78f6d67d7bc412983425b620122d734&&apiKey=a78f6d67d7bc412983425b620122d734' },
  ];

  return (
    <Layout>
      <div className="relative top-[-110px]">
      <Marquee />
      </div>
      <section className="flex gap-5 items-start self-center px-5 mt-12 w-full text-white max-w-[1360px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <h1 className="flex-auto self-start text-7xl max-md:max-w-full max-md:text-4xl">
          Canciones <span className="text-7xl">Recomendadas</span>
        </h1>
        <MusicGenre />
      </section>
      {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/109684e1-fe97-4601-b449-12d5d2ea8a33?apiKey=a78f6d67d7bc412983425b620122d734&&apiKey=a78f6d67d7bc412983425b620122d734" className="mt-24 w-full aspect-[2.94] max-md:mt-10 max-md:max-w-full" alt="Music recommendation banner" /> */}
      
      <section className="flex flex-col items-center pl-11 mt-24 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <div className="self-stretch max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {playlistImages.slice(0, 3).map((imageUrl, index) => (
              <PlaylistCard key={index} imageUrl={imageUrl} />
            ))}
          </div>
        </div>
        <button className="flex gap-2.5 px-8 py-2.5 mt-24 ml-6 text-lg font-light text-white border border-white border-solid rounded-[50px] max-md:px-5 max-md:mt-10">
          <span>Descubre más canciones</span>
          
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/41cdf6651b08f1a04e8fbc9f30ad6b350d71b5ced3924d31c7e4163b4be66bbf?apiKey=a78f6d67d7bc412983425b620122d734&&apiKey=a78f6d67d7bc412983425b620122d734" className="shrink-0 my-auto w-6 aspect-square" alt="" />
        </button>
        
        <div className="relative mt-20 max-w-full w-[872px] max-md:mt-10">
  {/* Asegúrate de que el contenido se muestre encima de Ellipse21 */}
  <div className="relative z-10">
    <h2 className="text-3xl font-semibold text-white">Artistas Populares</h2>
    <div className="flex gap-5 mt-7 text-2xl font-semibold text-white">
      {artists.map((artist, index) => (
        <ArtistCard key={index} name={artist.name} imageUrl={artist.imageUrl} />
      ))}
    </div>
  </div>
  
  
</div>
      </section>
      <h2 className="self-start mt-24 ml-11 text-7xl text-white max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
        PlayLists
      </h2>
      <section className="mt-16 w-full max-w-[1354px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {playlistImages.map((imageUrl, index) => (
            <PlaylistCard key={index} imageUrl={imageUrl} />
          ))}
        </div>
      </section>
      <button className="flex gap-2.5 px-8 py-2.5 mt-16 ml-6 text-lg font-light text-white border border-white border-solid rounded-[50px] max-md:px-5 max-md:mt-10">
        <span>Descubre más música</span>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/41cdf6651b08f1a04e8fbc9f30ad6b350d71b5ced3924d31c7e4163b4be66bbf?apiKey=a78f6d67d7bc412983425b620122d734&&apiKey=a78f6d67d7bc412983425b620122d734" className="shrink-0 my-auto w-6 aspect-square" alt="" />
      </button>
    </Layout>
  );
};

export default Dashboard;