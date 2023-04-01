import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/rekha-mahto/' target='_blank'><BsLinkedin></BsLinkedin></a>
        <a href='https://github.com/Mahto22' target='_blank'><BsGithub></BsGithub></a>
        <a href='https://www.instagram.com/girl_in_dream_22/' target='_blank'><BsInstagram></BsInstagram></a>
        <a href='https://wa.me/+919146284269' target='_blank'><BsWhatsapp></BsWhatsapp></a>
    </div>
  );
};

export default HeaderSocials;