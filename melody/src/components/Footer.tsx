import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col px-10 w-full text-white mt-[2380px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl max-md:max-w-full max-md:text-4xl">Shape the NFT Music</h2>
      <div className="flex gap-2.5 mt-11 max-md:flex-wrap max-md:mt-10">
        <div className="flex flex-col self-start mt-3">
          <div className="text-3xl">Facebook</div>
          <div className="mt-14 text-lg max-md:mt-10">Privacy Policy</div>
        </div>
        <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
          <nav className="flex gap-5 justify-between w-full text-3xl max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-5 whitespace-nowrap max-md:flex-wrap">
              <div className="shrink-0 w-px h-12 border border-white border-solid" />
              <div className="flex-auto my-auto">Twittter</div>
              <div className="shrink-0 w-px h-12 border border-white border-solid" />
              <div className="flex-auto my-auto">Medium</div>
              <div className="shrink-0 w-px h-12 border border-white border-solid" />
              <div className="flex-auto my-auto">Contact</div>
            </div>
            <div className="flex gap-2.5 my-auto">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/712ea870b69e1bdd9c6b6c146936f8e3f87fb4ae4ba62c996a030ed3be0c0994?apiKey=a78f6d67d7bc412983425b620122d734&&apiKey=a78f6d67d7bc412983425b620122d734" className="shrink-0 self-start w-6 aspect-square" alt="" />
              <div className="flex-auto">Back to the top</div>
            </div>
          </nav>
          <div className="flex gap-5 mt-11 text-lg max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex-auto">Terms and Conditions</div>
            <div className="flex-auto">Copyright © 2022 Avi Yansah</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;