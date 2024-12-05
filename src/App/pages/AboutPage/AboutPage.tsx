import React from 'react';
import Text from 'components/Text';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
  return (
    <div className="container">
      <div className={styles.aboutContainer}>
        <Text view="title" className={styles.centered}>
          О нас
        </Text>

        <div className={styles.content}>
          <img src="https://i.imgur.com/8VJdA9s.jpeg" alt="О нас" className={styles.image} />
          <div className={styles.textContainer}>
            <Text view="p-18" className={styles.text}>
              Добро пожаловать в наш интернет-магазин, созданный для всех, кто не представляет своей жизни без рыбалки!
              Мы — команда увлечённых рыболовов, которые знают, как важно иметь надёжное снаряжение, чтобы каждая
              рыбалка была успешной и запоминающейся.
            </Text>
            <Text view="p-18" className={styles.text}>
              В нашем магазине вы найдёте всё необходимое для рыбалки: от удилищ и катушек до приманок, одежды и
              аксессуаров. Мы сотрудничаем только с проверенными брендами, чтобы гарантировать качество каждого товара.
            </Text>
            <Text view="p-18" className={styles.text}>
              Мы не просто продаём товары для рыбалки — мы делимся своей страстью к этому удивительному занятию.
              Присоединяйтесь к нашей рыбацкой семье и отправляйтесь за своими самыми большими трофеями вместе с нами!
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
