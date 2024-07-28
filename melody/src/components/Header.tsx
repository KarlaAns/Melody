import React from "react";

export const Header = () => {
    return( 
    <div className="backdrop-blur-sm flex gap-5 justify-between px-14 pt-3.5 pb-6 w-full bg-white bg-opacity-10 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
    <div className="text-xl text-white">
      <span className="font-semibold">Melody</span>
      <br />
      Music Platform
    </div>
    <nav className="flex gap-5 items-center self-start mt-2.5 max-md:flex-wrap">
      <div className="grow self-stretch my-auto text-base text-white uppercase">
        <a href="#marketplace" className="no-underline hover:underline">Marketplace</a>
      </div>
      <div className="self-stretch my-auto text-base text-white uppercase">
        <a href="#about" className="no-underline hover:underline">About</a>
      </div>
      <div className="self-stretch my-auto text-base text-white uppercase">
        <a href="#dashboard" className="no-underline hover:underline">Dashboard</a>
      </div>
      <div className="self-stretch my-auto text-base text-white uppercase">
        <a href="#download" className="no-underline hover:underline">Download</a>
      </div>
    </nav>
    <div className="flex gap-5 justify-between my-auto">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9daa1c1937de38453b403c42ab505f8b92770d16de0e1a5f3402b13e0287e719?"
        className="shrink-0 aspect-[0.63] w-[15px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2851a5d5754b4c8449856fa66c5e2d5ab27dacc496f95293a1f18bd86e0e42a5?"
        className="shrink-0 w-6 aspect-square"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5977fff4c60fe3b175eaf57a10741ad4a4bb40639ca4d5e45265bd49cc9fc080?"
        className="shrink-0 w-6 aspect-square"
      />
    </div>
  </div>
  );
}