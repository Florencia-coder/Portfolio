import React from "react";
import useImageSlider from "../../hooks/useImageSlider";
import LazyImage from "../LazyImage/LazyImage";
import styles from "./imageCarrousel.module.css";

const ImageCarrousel = ({ images }) => {
  const { currentIndex, setCurrentIndex } = useImageSlider(images);

  return (
    <div className={styles.container}>
      <LazyImage 
        src={images[currentIndex]} 
        alt={`Imagen ${currentIndex + 1}`}
        className={styles.mainImg} 
      />
      <div className={styles.thumbnails}>
        {images.map((img, index) => (
          <LazyImage
            key={index}
            src={img}
            alt={`Miniatura ${index + 1}`}
            className={`${styles.thumbnail} ${
              index === currentIndex && styles.active
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarrousel;
