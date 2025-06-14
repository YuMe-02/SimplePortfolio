import React from 'react';

const FeaturedImage = ({ 
  imageUrl,
  placeholderText = "Featured Image",
  overlayTitle = "Current Exhibition",
  overlaySubtitle = "Limited Edition Prints Available",
  showOverlay = true
}) => {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center text-gray-600 text-xl relative">
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt="Featured" 
          className="w-full h-full object-cover"
        />
      ) : (
        placeholderText
      )}
      
      {showOverlay && (
        <div className="absolute bottom-10 left-10 text-gray-800 bg-white bg-opacity-90 p-5 backdrop-blur-sm">
          <div className="text-xl md:text-2xl font-light mb-2">
            {overlayTitle}
          </div>
          <div className="text-sm text-gray-600">
            {overlaySubtitle}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedImage;