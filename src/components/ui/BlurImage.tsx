
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const BlurImage: React.FC<BlurImageProps> = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const img = document.querySelector(`img[data-src="${src}"]`);
    if (img) observer.observe(img);
    
    return () => observer.disconnect();
  }, [src]);
  
  return (
    <div className={cn(
      'overflow-hidden relative bg-slate-200 animate-pulse',
      isLoaded ? 'animate-none bg-transparent' : '',
      className
    )} style={{ width, height }}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          data-src={src}
          className={cn(
            'transition-all duration-500 w-full h-full object-cover',
            isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-105'
          )}
          onLoad={() => setIsLoaded(true)}
          width={width}
          height={height}
          {...props}
        />
      )}
      {!isInView && (
        <div data-src={src} className="w-full h-full" />
      )}
    </div>
  );
};

export default BlurImage;
