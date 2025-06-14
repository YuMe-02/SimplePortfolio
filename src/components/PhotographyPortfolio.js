import React, { useState } from 'react';
import Navigation from './Navigation';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const PhotographyPortfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const heroProps = {
    title: "Darren Yu",
    // category: "/Portfolio/",
    subtitle: "Contemporary Photography",
    description: "Exploring the intersection of light, emotion, and narrative through the lens. Each frame captures a moment suspended between reality and imagination, inviting viewers to discover their own stories within."
  };

  const gridImages = [
    { id: 1, title: 'Sample 01', imageUrl: null },
    { id: 2, title: 'Sample 02', imageUrl: null },
    { id: 3, title: 'Sample 03', imageUrl: null },
    { id: 4, title: 'Sample 04', imageUrl: null }
  ];

  const ctaProps = {
    text: "View Full Portfolio",
    href: "#portfolio",
    onClick: (e) => {
      console.log('Portfolio clicked');
      // Add your navigation logic here
    }
  };

  const featuredImageProps = {
    imageUrl: selectedImage?.imageUrl || null,
    placeholderText: selectedImage ? selectedImage.title : "Featured Image",
    overlayTitle: "Current Exhibition",
    overlaySubtitle: "Limited Edition Prints Available"
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    console.log('Image clicked:', image);
  };

  const navLinks = ['Work', 'About', 'Contact'];

  return (
    <div className="font-sans bg-gray-100 text-gray-800 overflow-x-hidden">
      <Navigation links={navLinks} />
      
      <div className="flex min-h-screen flex-col lg:flex-row">
        <LeftPanel 
          heroProps={heroProps}
          gridImages={gridImages}
          ctaProps={ctaProps}
          onImageClick={handleImageClick}
          
        />
        <RightPanel 
          featuredImageProps={featuredImageProps}
        />
      </div>
    </div>
  );
};

export default PhotographyPortfolio;