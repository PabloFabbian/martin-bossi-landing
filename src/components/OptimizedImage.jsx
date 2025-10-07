import React from 'react';

const OptimizedImage = ({
    src,
    alt,
    className = '',
    sizes = '100vw',
    loading = 'lazy',
    width,
    height,
    priority = false
}) => {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            loading={priority ? 'eager' : loading}
            decoding="async"
            width={width}
            height={height}
            sizes={sizes}
            style={{ contentVisibility: 'auto' }}
        />
    );
};

export default OptimizedImage;