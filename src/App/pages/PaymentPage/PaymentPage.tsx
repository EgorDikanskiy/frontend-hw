import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import Input from 'components/Input';
import { routerUrls } from 'config/routerUrls';
import { useRootStore } from 'stores/RootStore';
import styles from './PaymentPage.module.scss';

const PaymentPage: React.FC = observer(() => {
  const { cartStore } = useRootStore();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    cardNumber: '',
    cvv: '',
    expiryDate: '',
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    const { cardNumber, cvv, expiryDate } = form;

    // Валидация перед отправкой
    if (cardNumber.length !== 16) {
      alert('Номер карты должен содержать 16 цифр.');
      return;
    }
    if (cvv.length !== 3) {
      alert('CVV должен содержать 3 цифры.');
      return;
    }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      alert('Дата окончания должна быть в формате MM/YY.');
      return;
    }

    setIsProcessing(true);

    // Симуляция обработки платежа
    setTimeout(() => {
      cartStore.clearCart(); // Очистить корзину после успешной оплаты
      alert('Оплата прошла успешно! Спасибо за покупку.');
      navigate(routerUrls.catalog.mask); // Редирект после оплаты
    }, 3000);
  };

  return (
    <div className={styles.paymentPage}>
      <h1>Оплата</h1>
      <div className={styles.paymentForm}>
        <Input
          placeholder="Номер карты"
          value={form.cardNumber}
          maxLength={16}
          onChange={(value: string) =>
            setForm({
              ...form,
              cardNumber: value.replace(/\D/g, ''), // Только цифры
            })
          }
          className={styles.input}
        />
        <Input
          placeholder="CVV"
          value={form.cvv}
          maxLength={3}
          onChange={(value: string) =>
            setForm({
              ...form,
              cvv: value.replace(/\D/g, ''), // Только цифры
            })
          }
          className={styles.input}
        />
        <Input
          placeholder="Дата окончания (MM/YY)"
          value={form.expiryDate}
          maxLength={5}
          onChange={(value: string) =>
            setForm({
              ...form,
              expiryDate: value
                .replace(/[^0-9/]/g, '') // Только цифры и "/"
                .replace(/(\/.*\/)/g, ''), // Убираем лишние слэши
            })
          }
          className={styles.input}
        />
        <Button onClick={handlePayment} disabled={isProcessing} className={styles.payButton}>
          {isProcessing ? 'Обработка...' : 'Оплатить'}
        </Button>
      </div>
    </div>
  );
});

export default PaymentPage;
