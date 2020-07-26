import React from 'react';
import { FaHeart, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__social">
                <a href="https://www.instagram.com/speak.up.tech/">
                <FaInstagram color="#ffff" size="40"/>
                </a>

                <a href="https://www.youtube.com/c/SpeakUpTech">
                <FaYoutube color="#ffff" size="40"/>
                </a>
            </div>
            <p className="footer__copyright">
                Made with <FaHeart color="#851942"/> by Speak up Tech
            </p>
        </footer>
    )
}

export default Footer;