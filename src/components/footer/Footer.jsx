import React from 'react';
import './footer.css';
import {FiFacebook} from 'react-icons/fi';
import {BsInstagram} from 'react-icons/bs';
import {TbBrandTwitter} from 'react-icons/tb';

const Footer = () =>{
  return (
    <footer>
      <a href='#' className='footer__logo'>REKHA</a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>COntact Us</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href='https://m.facebook.com/p/100005859879076/' target='_blank'><FiFacebook></FiFacebook></a>
        <a href='https://www.instagram.com/girl_in_dream_22/' target='_blank'><BsInstagram></BsInstagram></a>
        <a href='https://twitter.com/' target='_blank'><TbBrandTwitter></TbBrandTwitter></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Rekha Portfolio All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;