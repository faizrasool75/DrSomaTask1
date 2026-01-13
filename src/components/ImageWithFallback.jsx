import { useState } from 'react';

const ImageWithFallback = ({ 
  src, 
  alt, 
  className = '', 
  fallbackColor = 'from-gray-100 to-gray-200',
  loading = 'lazy'
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleLoad = () => {
    setImageLoading(false);
  };

  if (imageError) {
    return (
      <div className={`bg-gradient-to-br ${fallbackColor} ${className} flex items-center justify-center`}>
        <div className="text-center p-8">
          <i className="fas fa-image text-4xl text-gray-400 mb-2"></i>
          <p className="text-gray-500 text-sm">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {imageLoading && (
        <div className={`bg-gradient-to-br ${fallbackColor} ${className} animate-pulse`}></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${imageLoading ? 'hidden' : 'block'}`}
        onError={handleError}
        onLoad={handleLoad}
        loading={loading}
      />
    </>
  );
};

export default ImageWithFallback;
