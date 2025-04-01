import { useState, useEffect, useRef } from 'react';
import styles from './LazyImage.module.css';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  onClick,
  threshold = 0.1 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`${styles.imageContainer} ${className}`} onClick={onClick}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`${styles.image} ${isLoaded ? styles.loaded : ''}`}
        onLoad={handleLoad}
        loading="lazy"
      />
      {!isLoaded && (
        <div className={styles.placeholder}>
          <div className={styles.placeholderImage} />
        </div>
      )}
    </div>
  );
};

export default LazyImage; 