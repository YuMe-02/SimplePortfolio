import React from 'react';
import HeroSection from './HeroSection';
import ImageGrid from './ImageGrid';
import CTAButton from './CTAButton';

const LeftPanel = ({ heroProps, gridImages, ctaProps }) => {
  return (
    <div className="w-full lg:w-3/5 p-20 bg-white flex flex-col justify-center ">
      <HeroSection {...heroProps} />
      <ImageGrid images={gridImages} />
      <CTAButton {...ctaProps} />
    </div>
  );
};

export default LeftPanel;