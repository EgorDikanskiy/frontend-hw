import { observer } from 'mobx-react-lite';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { filterUrlImage } from '../../../../../utils/filterUrlImage';
import styles from './Slider.module.scss';

export type CarouselProps = {
  images: Array<string>;
};

const DemoCarousel: React.FC<CarouselProps> = observer(({ images }) => {
  return (
    <Carousel
      className={styles.slider}
      width="100%"
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className={`${
              hasPrev ? 'absolute' : styles.slider__button_disabled
            } ${styles.slider__button} ${styles.slider__button_left}`}
            onClick={clickHandler}
          >
            <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="1">
                <g filter="url(#filter0_d_531_2168)">
                  <circle cx="32" cy="32" r="32" transform="matrix(-1 0 0 1 84 16)" fill="black" />
                </g>
                <path
                  d="M56.043 57.6126L47.9561 49.5258C47.0011 48.5708 47.0011 47.008 47.9561 46.0529L56.043 37.9661"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_531_2168"
                  x="0"
                  y="0"
                  width="104"
                  height="104"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.686275 0 0 0 0 0.678431 0 0 0 0 0.709804 0 0 0 0.2 0"
                  />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_531_2168" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_531_2168" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className={`${
              hasNext ? 'absolute' : styles.slider__button_disabled
            } ${styles.slider__button} ${styles.slider__button_right}`}
            onClick={clickHandler}
          >
            <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_531_2167)">
                <circle cx="52" cy="48" r="32" fill="black" />
              </g>
              <path
                d="M47.957 57.6126L56.0439 49.5258C56.9989 48.5708 56.9989 47.008 56.0439 46.0529L47.957 37.9661"
                stroke="white"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <filter
                  id="filter0_d_531_2167"
                  x="0"
                  y="0"
                  width="104"
                  height="104"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.686275 0 0 0 0 0.678431 0 0 0 0 0.709804 0 0 0 0.2 0"
                  />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_531_2167" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_531_2167" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        );
      }}
    >
      {images.map((image) => (
        <div key={image}>
          <img src={filterUrlImage(image)} />
        </div>
      ))}
    </Carousel>
  );
});

export default DemoCarousel;
