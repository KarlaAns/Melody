import * as React from "react";

interface SongCardProps {
  songName: string;
  imageUrl: string;
}

export const SongCard: React.FC<SongCardProps> = ({ songName, imageUrl }) => {
  return (
    <div className="flex flex-col bg-[#181818] text-white p-4 rounded-lg w-[368px]">
      <div className="relative">
        <img
          src={imageUrl} 
          alt="Album Cover"
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{songName}</h2>
        <div className="flex items-center mt-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2140260c93daee2e67615b07334bc768711ee7f934c2f620d4d8f2c280d54626?"
            alt="Currency Icon"
            className="w-4 h-4"
          />
          <span className="ml-2 text-sm">0.3234</span>
          <span className="ml-4 text-sm">16 tokens</span>
        </div>
        <div className="flex mt-4">
          <button className="flex items-center justify-center gap-2 px-4 py-2 mr-2 text-sm font-light text-white border border-white rounded-full">
            Play now
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2140260c93daee2e67615b07334bc768711ee7f934c2f620d4d8f2c280d54626?"
              alt="Play Icon"
              className="w-4 h-4"
            />
          </button>
          <button className="px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-full">
            BUY NFT
          </button>
        </div>
      </div>
    </div>
  );
};
