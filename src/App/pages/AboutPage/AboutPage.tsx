import React from 'react';
import Text from 'components/Text';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
  return (
    <div className="container">
      <div className={styles.aboutContainer}>
        <Text view="title" className={styles.centered}>
          About Us
        </Text>

        <div className={styles.content}>
          <img
            src="https://lalasia-furniture-shop.netlify.app/static/media/video.292a5d4a7ef78a561e55.png"
            alt="About Us"
            className={styles.image}
          />
          <div className={styles.textContainer}>
            <Text view="p-18" className={styles.text}>
              Welcome to our online store! We are a team of passionate individuals dedicated to bringing you the best
              products at the best prices. Our goal is to make shopping easy, convenient, and enjoyable for everyone.
            </Text>
            <Text view="p-18" className={styles.text}>
              At our store, we offer a wide range of products, from electronics to clothing, all carefully selected for
              quality and value. Our customer support team is always here to help with any questions or concerns you may
              have.
            </Text>
            <Text view="p-18" className={styles.text}>
              Thank you for visiting our site. We hope you find what youre looking for and enjoy your shopping
              experience with us!
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
