import React from 'react';
import styles from './Loader.module.scss'
import LoaderSvgS from './LoaderS';
import LoaderSvgM from './LoaderM';
import LoaderSvgL from './LoaderL';
import classNames from 'classnames';


export type LoaderProps = {
    /** Размер */
    size?: 's' | 'm' | 'l';
    /** Дополнительный класс */
    className?: string;
};

const Loader: React.FC<LoaderProps> = ({ size, className }: LoaderProps) => {
    let loader;

    switch (size) {
        case 's':
            loader = <LoaderSvgS />;
            break;
        case 'm':
            loader = <LoaderSvgM />;
            break;
        case 'l':
            loader = <LoaderSvgL />;
            break;
        default:
            loader = <LoaderSvgL />;
    }

    return (
        <div className={classNames(className, styles.loader__container)}>
            {loader}
        </div>
    );
  }

export default Loader;
