import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navLinks.module.css";

import openMenu from "../images/open.svg";
import closeMenu from "../images/close.svg";

const NavLinks = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <button className={styles.dropdownToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                    <img className={styles.closeMenu} src={closeMenu} alt="Close" />
                ) : (
                    <img className={styles.openMenu} src={openMenu} alt="Open" />
                )}
            </button>
            <nav className={styles.links}>
                <div className={isMenuOpen ? styles.linksOpen : styles.linksClosed}>
                    <NavLink className={styles.link} to="/" onClick={() => setIsMenuOpen(false)}>
                        Home
                    </NavLink>
                    <NavLink className={styles.link} to="/about" onClick={() => setIsMenuOpen(false)}>
                        About
                    </NavLink>
                    <NavLink className={styles.link} to="/portfolio" onClick={() => setIsMenuOpen(false)}>
                        Portfolio
                    </NavLink>
                    <NavLink className={styles.link} to="/contact" onClick={() => setIsMenuOpen(false)}>
                        Contact
                    </NavLink>
                </div>
            </nav>
        </>
    );
};

export default NavLinks;