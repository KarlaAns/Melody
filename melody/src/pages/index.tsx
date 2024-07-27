import * as React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col pb-20 bg-neutral-950">
      <div className="flex gap-5 justify-between px-14 pt-3.5 pb-6 w-full bg-white bg-opacity-10 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="text-xl text-white">
          <span className="font-semibold">Melody</span>
          <br />
          Music Platform
        </div>
        <div className="flex gap-5 items-center self-start mt-2.5 max-md:flex-wrap">
          <div className="grow self-stretch my-auto text-base text-white uppercase">
            Marketplace
          </div>
          <div className="self-stretch my-auto text-base text-white uppercase">
            About
          </div>
          <div className="self-stretch my-auto text-base text-white uppercase">
            Dashboard
          </div>
          <div className="self-stretch my-auto text-base text-white uppercase">
            DOwnload
          </div>
          <div className="flex relative flex-col justify-center items-center self-stretch w-8 aspect-[1.07]">
            <img
              loading="lazy"
              srcSet="..."
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              srcSet="..."
              className="w-full rounded-full border-2 border-white border-solid aspect-[1.06]"
            />
          </div>
        </div>
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
      <div className="flex flex-col mt-48 ml-10 max-w-full text-white w-[671px] max-md:mt-10">
        <div className="text-7xl max-md:max-w-full max-md:text-4xl">
          Melody.
        </div>
        <div className="mt-4 text-6xl max-md:max-w-full max-md:text-4xl">
          Music for everyone.
        </div>
        <div className="mt-9 text-base font-light leading-7 max-md:max-w-full">
          Explora el extenso mundo de la música y atrevete a escuchar géneros de
          mpusica y a artistas que nunca habías escuchado antes!
        </div>
        <div className="flex gap-5 justify-between self-start mt-16 max-md:mt-10">
          <div className="flex flex-col self-start mt-1.5 text-sm">
            <div>Powered by</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/90b269e4a4afbae1f441d1a571da5742db126e188f2b11f283dbcc514b4ed59a?"
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
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col max-md:mt-10">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="max-w-full border border-white border-solid aspect-[0.82] w-[222px]"
                      />
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="self-end mt-9 max-w-full aspect-[0.83] w-[222px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start mt-14 max-md:mt-10">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="w-full aspect-[0.83]"
                      />
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="mt-14 ml-3.5 w-full aspect-[0.83] max-md:mt-10 max-md:ml-2.5"
                      />
                    </div>
                  </div>
                </div>
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
        <div className="mt-52 text-7xl text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Comparte tus gustos
        </div>
        <div className="mt-52 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-white max-md:mt-10">
                <div className="text-6xl font-semibold max-md:text-4xl">
                  01/
                </div>
                <div className="mt-11 text-lg font-light max-md:mt-10">
                  Escucha toda la música que desees
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-white max-md:mt-10">
                <div className="text-6xl font-semibold max-md:text-4xl">
                  02/
                </div>
                <div className="mt-11 text-lg font-light max-md:mt-10">
                  Añadela a tu playlist personal
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-white max-md:mt-10">
                <div className="text-6xl font-semibold max-md:text-4xl">
                  03/
                </div>
                <div className="mt-11 text-lg font-light max-md:mt-10">
                  Compartela con todos tus amigos
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-64 w-full text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto text-7xl max-md:text-4xl">
            Descubre Melody
          </div>
          <div className="flex gap-4 self-end mt-32 text-base max-md:flex-wrap max-md:mt-10">
            <div className="grow my-auto text-xl">Muisc Genre</div>
            <div className="px-5 py-2.5 whitespace-nowrap border border-solid border-neutral-400 rounded-[50px]">
              Rock
            </div>
            <div className="px-5 py-2.5 whitespace-nowrap border border-solid border-neutral-400 rounded-[50px]">
              Pop
            </div>
            <div className="px-5 py-2.5 whitespace-nowrap border border-solid border-neutral-400 rounded-[50px]">
              K-Pop
            </div>
            <div className="px-5 py-2.5 whitespace-nowrap border border-solid border-neutral-400 rounded-[50px]">
              Jazz
            </div>
            <div className="px-5 py-2.5 whitespace-nowrap border border-solid border-neutral-400 rounded-[50px]">
              Funk
            </div>
          </div>
        </div>
        <div className="mt-24 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center max-md:mt-10">
                <div className="px-14 pt-20 pb-8 max-md:px-5">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-2 justify-between px-6 py-3 mt-80 text-base font-light text-white border border-white border-solid rounded-[55px] max-md:px-5 max-md:mt-10">
                        <div>Play now</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c4ccc8ac1f9cc4e1740479081db9b6e7081b46c59d5265851c4791c9b0a8525?"
                          className="shrink-0 my-auto aspect-square w-[22px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="grow py-2 mt-80 text-xl font-bold text-white rounded-[55px] max-md:mt-10">
                        Add to PlayList
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center max-md:mt-10">
                <div className="px-14 pt-20 pb-8 max-md:px-5">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-2 justify-between px-6 py-3 mt-80 text-base font-light text-white border border-white border-solid rounded-[55px] max-md:px-5 max-md:mt-10">
                        <div>Play now</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/01b81d0a3f450bbfa594eeb23b5f52466a2949555f1c17035ed606e2674d049f?"
                          className="shrink-0 my-auto aspect-square w-[22px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="grow py-2 mt-80 text-xl font-bold text-white rounded-[55px] max-md:mt-10">
                        Add to PlayList
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center max-md:mt-10">
                <div className="px-14 pt-20 pb-8 max-md:px-5">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-2 justify-between px-6 py-3 mt-80 text-base font-light text-white border border-white border-solid rounded-[55px] max-md:px-5 max-md:mt-10">
                        <div>Play now</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/27dd1bc9a0147717ce3300b9cbbf0cd599b0bc8eb6b4657ba8f7cd4c59d98c45?"
                          className="shrink-0 my-auto aspect-square w-[22px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="grow py-2 mt-80 text-xl font-bold text-white rounded-[55px] max-md:mt-10">
                        Add to PlayList
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center max-md:mt-10">
                <div className="px-14 pt-20 pb-8 max-md:px-5">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-2 justify-between px-6 py-3 mt-80 text-base font-light text-white border border-white border-solid rounded-[55px] max-md:px-5 max-md:mt-10">
                        <div>Play now</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c4ccc8ac1f9cc4e1740479081db9b6e7081b46c59d5265851c4791c9b0a8525?"
                          className="shrink-0 my-auto aspect-square w-[22px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="grow py-2 mt-80 text-xl font-bold text-white rounded-[55px] max-md:mt-10">
                        Add to PlayList
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center max-md:mt-10">
                <div className="px-14 pt-20 pb-8 max-md:px-5">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-2 justify-between px-6 py-3 mt-80 text-base font-light text-white border border-white border-solid rounded-[55px] max-md:px-5 max-md:mt-10">
                        <div>Play now</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/01b81d0a3f450bbfa594eeb23b5f52466a2949555f1c17035ed606e2674d049f?"
                          className="shrink-0 my-auto aspect-square w-[22px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="grow py-2 mt-80 text-xl font-bold text-white rounded-[55px] max-md:mt-10">
                        Add to PlayList
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center max-md:mt-10">
                <div className="px-14 pt-20 pb-8 max-md:px-5">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-2 justify-between px-6 py-3 mt-80 text-base font-light text-white border border-white border-solid rounded-[55px] max-md:px-5 max-md:mt-10">
                        <div>Play now</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/27dd1bc9a0147717ce3300b9cbbf0cd599b0bc8eb6b4657ba8f7cd4c59d98c45?"
                          className="shrink-0 my-auto aspect-square w-[22px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="grow py-2 mt-80 text-xl font-bold text-white rounded-[55px] max-md:mt-10">
                        Add to PlayList
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center max-md:mt-10">
                <div className="px-14 pt-20 pb-8 max-md:px-5">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-2 justify-between px-6 py-3 mt-80 text-base font-light text-white border border-white border-solid rounded-[55px] max-md:px-5 max-md:mt-10">
                        <div>Play now</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c4ccc8ac1f9cc4e1740479081db9b6e7081b46c59d5265851c4791c9b0a8525?"
                          className="shrink-0 my-auto aspect-square w-[22px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="grow py-2 mt-80 text-xl font-bold text-white rounded-[55px] max-md:mt-10">
                        Add to PlayList
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center max-md:mt-10">
                <div className="px-14 pt-20 pb-8 max-md:px-5">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-2 justify-between px-6 py-3 mt-80 text-base font-light text-white border border-white border-solid rounded-[55px] max-md:px-5 max-md:mt-10">
                        <div>Play now</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/01b81d0a3f450bbfa594eeb23b5f52466a2949555f1c17035ed606e2674d049f?"
                          className="shrink-0 my-auto aspect-square w-[22px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="grow py-2 mt-80 text-xl font-bold text-white rounded-[55px] max-md:mt-10">
                        Add to PlayList
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center max-md:mt-10">
                <div className="px-14 pt-20 pb-8 max-md:px-5">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-2 justify-between px-6 py-3 mt-80 text-base font-light text-white border border-white border-solid rounded-[55px] max-md:px-5 max-md:mt-10">
                        <div>Play now</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/27dd1bc9a0147717ce3300b9cbbf0cd599b0bc8eb6b4657ba8f7cd4c59d98c45?"
                          className="shrink-0 my-auto aspect-square w-[22px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="grow py-2 mt-80 text-xl font-bold text-white rounded-[55px] max-md:mt-10">
                        Add to PlayList
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center max-md:mt-10">
                <div className="px-14 pt-20 pb-8 max-md:px-5">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-2 justify-between px-6 py-3 mt-80 text-base font-light text-white border border-white border-solid rounded-[55px] max-md:px-5 max-md:mt-10">
                        <div>Play now</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c4ccc8ac1f9cc4e1740479081db9b6e7081b46c59d5265851c4791c9b0a8525?"
                          className="shrink-0 my-auto aspect-square w-[22px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="grow py-2 mt-80 text-xl font-bold text-white rounded-[55px] max-md:mt-10">
                        Add to PlayList
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center max-md:mt-10">
                <div className="px-14 pt-20 pb-8 max-md:px-5">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-2 justify-between px-6 py-3 mt-80 text-base font-light text-white border border-white border-solid rounded-[55px] max-md:px-5 max-md:mt-10">
                        <div>Play now</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/01b81d0a3f450bbfa594eeb23b5f52466a2949555f1c17035ed606e2674d049f?"
                          className="shrink-0 my-auto aspect-square w-[22px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="grow py-2 mt-80 text-xl font-bold text-white rounded-[55px] max-md:mt-10">
                        Add to PlayList
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center max-md:mt-10">
                <div className="px-14 pt-20 pb-8 max-md:px-5">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-2 justify-between px-6 py-3 mt-80 text-base font-light text-white border border-white border-solid rounded-[55px] max-md:px-5 max-md:mt-10">
                        <div>Play now</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/27dd1bc9a0147717ce3300b9cbbf0cd599b0bc8eb6b4657ba8f7cd4c59d98c45?"
                          className="shrink-0 my-auto aspect-square w-[22px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="grow py-2 mt-80 text-xl font-bold text-white rounded-[55px] max-md:mt-10">
                        Add to PlayList
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2.5 self-center px-8 py-2.5 mt-16 text-lg font-light text-white border border-white border-solid rounded-[50px] max-md:px-5 max-md:mt-10">
          <div>Descubre más música</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41cdf6651b08f1a04e8fbc9f30ad6b350d71b5ced3924d31c7e4163b4be66bbf?"
            className="shrink-0 my-auto w-6 aspect-square"
          />
        </div>
      </div>
      <div className="flex flex-col px-10 mt-28 w-full text-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="text-5xl max-md:max-w-full max-md:text-4xl">
          Shape the NFT Music
        </div>
        <div className="flex gap-5 justify-between mt-11 w-full text-3xl max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 items-center whitespace-nowrap max-md:flex-wrap">
            <div className="grow self-stretch my-auto">Facebook</div>
            <div className="shrink-0 self-stretch w-px h-12 border border-white border-solid" />
            <div className="flex-auto self-stretch my-auto">Twittter</div>
            <div className="shrink-0 self-stretch w-px h-12 border border-white border-solid" />
            <div className="flex-auto self-stretch my-auto">Medium</div>
            <div className="shrink-0 self-stretch w-px h-12 border border-white border-solid" />
            <div className="flex-auto self-stretch my-auto">Contact</div>
          </div>
          <div className="flex gap-2.5 my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/712ea870b69e1bdd9c6b6c146936f8e3f87fb4ae4ba62c996a030ed3be0c0994?"
              className="shrink-0 self-start w-6 aspect-square"
            />
            <div className="flex-auto">Back to the top</div>
          </div>
        </div>
        <div className="flex gap-5 mt-11 w-full text-lg max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5">
            <div className="flex-auto">Privacy Policy</div>
            <div className="flex-auto">Terms and Conditions</div>
          </div>
          <div className="flex-auto">Copyright © 2022 Avi Yansah</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
