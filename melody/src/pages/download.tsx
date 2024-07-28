import React from 'react';
import {Header}  from '../components/Header';
import Hero from '../components/Hero';
import FeatureStrip from '../components/FeatureStrip';
import HowItWorks from '../components/HowItWorks';
import DownloadSteps from '../components/DownloadSteps';
import DownloadForm from '../components/DownloadForm';
import Footer from '../components/Footer';

const MelodyMusicPlatform: React.FC = () => {
  return (
    <div className="flex flex-col pb-20 bg-neutral-950">
      <Header />
      <main>
        <Hero />
        <FeatureStrip />
        <div className="mt-5 w-full border border-white border-solid min-h-[1px] max-md:max-w-full" />
        <HowItWorks />
        <DownloadSteps />
        <DownloadForm />
      </main>
      <Footer />
    </div>
    );
    };
    
    export default MelodyMusicPlatform;