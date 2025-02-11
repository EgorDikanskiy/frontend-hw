import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import Input from 'components/Input';
import ArrowDownIcon from 'components/icons/ArrowDownIcon';
import styles from './MultiDropdown.module.scss';

export type Option = {
  id(id: number | string): unknown;
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
  className?: string;
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Возвращает строку которая будет выводится в инпуте. В случае если опции не выбраны, строка должна отображаться как placeholder. */
  getTitle: (value: Option[]) => string;
};

const MultiDropdown: React.FC<MultiDropdownProps> = (props: MultiDropdownProps) => {
  const { options, value, onChange, disabled, getTitle, className } = props;

  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!rootRef.current) return;

      if (!(e.target instanceof Element)) return;

      const isOpen = rootRef.current.contains(e.target);

      setIsOpen(isOpen);
    };

    window.document.addEventListener('click', handleClick);
    return () => {
      window.document.removeEventListener('click', handleClick);
    };
  }, [setIsOpen, value]);

  useEffect(() => {
    if (isOpen) return setSearch('');

    setSearch(value.length ? getTitle(value) : '');
  }, [isOpen, getTitle, value, setSearch]);

  const items = options
    .filter((option) => {
      if (search === null) return true;
      return option.value.toLocaleLowerCase().startsWith(search.toLocaleLowerCase());
    })
    .map((option) => {
      const isSelected = value.map((v) => v.key).includes(option.key);

      return (
        <div
          className={classNames(styles.item, isSelected && styles.item__selected)}
          onClick={() => {
            if (isSelected) {
              onChange(value.filter((v) => v.key !== option.key));
            } else {
              onChange([...value, option]);
            }
          }}
          key={option.key}
        >
          {option.value}
        </div>
      );
    });

  return (
    <div className={classNames(styles.root, className)} ref={rootRef}>
      <Input
        disabled={disabled}
        onChange={(value) => {
          setSearch(value);
        }}
        value={search}
        className={styles.category}
        placeholder={getTitle(value)}
        afterSlot={<ArrowDownIcon />}
      />
      {isOpen && !disabled && <div className={styles.menuCategory}>{items}</div>}
    </div>
  );
};

export default MultiDropdown;
