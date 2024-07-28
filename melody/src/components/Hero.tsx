import React from 'react';

const Hero: React.FC = () => (
  <section className="flex flex-col mt-48 ml-8 max-w-full text-white w-[556px] max-md:mt-10">
    <h1 className="text-7xl max-md:max-w-full max-md:text-4xl">Melody.</h1>
    <h2 className="mt-4 text-6xl max-md:max-w-full max-md:text-4xl">Music downloader.</h2>
    <div className="flex gap-5 mt-40 max-md:flex-wrap max-md:mt-10">
      <div className="flex flex-col self-start mt-1.5 text-sm">
        <p>Powered by</p>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d232a7a6e9c3e0d82293a8e6b0998d652be2869f31fbf3932c59516be3dc21ae?apiKey=a78f6d67d7bc412983425b620122d734&&apiKey=a78f6d67d7bc412983425b620122d734" className="self-center mt-2 aspect-[14.29] w-[164px]" alt="Powered by logo" />
      </div>
      <button className="flex flex-auto gap-2.5 px-8 py-2.5 text-lg font-light border border-white border-solid rounded-[50px] max-md:px-5">
        <span>Discover More</span>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/41cdf6651b08f1a04e8fbc9f30ad6b350d71b5ced3924d31c7e4163b4be66bbf?apiKey=a78f6d67d7bc412983425b620122d734&&apiKey=a78f6d67d7bc412983425b620122d734" className="shrink-0 my-auto w-6 aspect-square" alt="" />
      </button>
    </div>
  </section>
);

export default Hero;