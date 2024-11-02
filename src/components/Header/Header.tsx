import Navigation from 'components/Nav';
import styles from './Header.module.scss'
import Panel from 'components/Panel';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.header__inner}>
                    <a href='/catalog'>
                        <img src={logo}></img>
                    </a>
                    <Navigation/>
                    <Panel/>
                </div>
            </div>
        </header>
    );
}

export default Header;