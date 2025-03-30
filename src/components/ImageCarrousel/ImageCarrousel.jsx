import React from "react";
import useImageSlider from "../../hooks/useImageSlider";
import styles from "./ImageCarrousel.module.css";

const ImageCarrousel = ({ images }) => {
  const { currentIndex, setCurrentIndex } = useImageSlider(images);

  return (
    <div className={styles.container}>
      <img src={images[currentIndex]} className={styles.mainImg} />
      <div className={styles.thumbnails}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
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
