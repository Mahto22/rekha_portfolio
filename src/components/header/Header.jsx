import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.jpeg';
import HeaderSocials from './HeaderSocials';
import {FaLongArrowAltRight} from 'react-icons/fa';

const Header = () =>{
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rekhakumari Mahto</h1>
        <h5 className='text-light'>Web Developer</h5>
        <CTA></CTA>
        <HeaderSocials></HeaderSocials>
        <div className='me'>
          <img src={ME} alt='me'></img>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down<FaLongArrowAltRight className='scroll__iconarrow'></FaLongArrowAltRight></a>
      </div>
    </header>
  );
};

export default  Header;