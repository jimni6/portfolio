import NavLinks from "./navLinks";
import logo from "../images/logo.svg";
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="logo" />
            <NavLinks />
        </header>
    );
};

export default Header;