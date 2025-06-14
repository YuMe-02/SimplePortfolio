import React from 'react';

const ImageGrid = ({ 
  images = [
    { id: 1, title: 'Sample 01', imageUrl: null },
    { id: 2, title: 'Sample 02', imageUrl: null },
    { id: 3, title: 'Sample 03', imageUrl: null },
    { id: 4, title: 'Sample 04', imageUrl: null }
  ],
  onImageClick
}) => {
  const handleImageClick = (image) => {
    if (onImageClick) {
      onImageClick(image);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-5 mb-10">
      {images.map((image) => (
        <div
          key={image.id}
          className="aspect-square bg-white border border-gray-200 flex items-center justify-center text-gray-400 text-sm transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl overflow-hidden"
          onClick={() => handleImageClick(image)}
        >
          {image.imageUrl ? (
            <img 
              src={image.imageUrl} 
              alt={image.title}
              className="w-full h-full object-cover"
            />
          ) : (
            image.title
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;