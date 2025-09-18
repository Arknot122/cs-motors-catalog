import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  blurDataURL?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  priority = false,
  blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0eH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/2gAMAwEAAhEDEQA/AJgABfLQAB9v/9k="
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Convert PNG to WebP if supported and optimize sizing
  const getOptimizedSrc = (originalSrc: string) => {
    // For small images (logos, icons), aggressively optimize
    if (width && height) {
      // Always add optimization parameters for better compression and format conversion
      const params = new URLSearchParams();
      params.set('w', width.toString());
      params.set('h', height.toString());
      params.set('f', 'webp'); // Force WebP format for better compression
      params.set('q', '85'); // High quality but compressed
      params.set('fit', 'contain'); // Maintain aspect ratio
      return originalSrc + '?' + params.toString();
    }
    return originalSrc;
  };

  return (
    <div 
      ref={imgRef}
      className={cn("relative overflow-hidden", className)}
      style={{ 
        width: width || 'auto', 
        height: height || 'auto',
        minWidth: width || 'auto',
        minHeight: height || 'auto',
        aspectRatio: width && height ? `${width}/${height}` : 'auto'
      }}
    >
      {/* Blur placeholder */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{ 
            backgroundImage: `url(${blurDataURL})`,
            backgroundColor: '#f3f4f6',
            width: '100%',
            height: '100%'
          }}
        />
      )}
      
      {/* Main image */}
      {isInView && (
        <img
          src={getOptimizedSrc(src)}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            "transition-opacity duration-300 w-full h-full object-cover object-center max-w-full max-h-full",
            isLoaded ? "opacity-100" : "opacity-0",
            hasError && "hidden"
          )}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
      )}
      
      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Imagem não disponível</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;