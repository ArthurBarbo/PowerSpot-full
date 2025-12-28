import { useState, useRef, useEffect } from "react";
import PowerSpot__logo from "../../images/powerspot__logo.svg";
import Mobile_menu_close from "../../images/list_up.svg";
import Mobile_menu_open from "../../images/list.svg";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header({ openLogin, onHomeClick, user, onLogout, onEditName }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="header__container">
            <img
                src={PowerSpot__logo}
                alt="PowerSpot Logo"
                className="header__logo"
            />
            <div
                className="header__hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <img
                    className="header__list"
                    src={menuOpen ? Mobile_menu_close : Mobile_menu_open}
                    alt="Logo para abrir o menu"
                />
            </div>

            <nav className={`header__menuContainer ${menuOpen ? "open" : ""}`}>
                <Link className="header__link" to="/">
                    <h2
                        className="header__text header__menu"
                        onClick={() => {
                            onHomeClick?.();
                            setMenuOpen(false);
                        }}
                    >
                        Início
                    </h2>
                </Link>

                <Link className="header__link" to="/contacts">
                    <h2 className="header__text header__menu">Contato</h2>
                </Link>

                <Link className="header__link" to="/about">
                    <h2 className="header__text header__menu">Sobre Nós</h2>
                </Link>

                {user ? (
                    <div
                        className={`header__user ${dropdownOpen ? "header__user--open" : ""}`}
                        ref={dropdownRef}
                    >
                        <div
                            className="header__info"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            <span className="header__hello">Olá,</span>
                            <span className="header__bold">{user.name}</span>
                        </div>

                        {dropdownOpen && (
                            <div className="header__dropdown">
                                <button className="header__dropdown-btn" onClick={() => {
                                    setDropdownOpen(false);
                                    onEditName();
                                }}>
                                    Editar Nome
                                </button>
                                <button className="header__dropdown-btn" onClick={() => {
                                    setDropdownOpen(false);
                                    onLogout();
                                }} >
                                    Sair
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <h2 className="header__text header__menu" onClick={openLogin}>
                        Acesse suas preferências
                    </h2>
                )}
            </nav>
        </header>
    );
}