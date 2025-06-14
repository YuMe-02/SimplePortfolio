import React from 'react';
import FeaturedImage from './FeaturedImage';

const RightPanel = ({ featuredImageProps }) => {
  return (
    <div className="w-full lg:w-2/5 bg-gray-800 relative overflow-hidden">
      <FeaturedImage {...featuredImageProps} />
    </div>
  );
};

export default RightPanel;