import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id:1,
    image:IMG1,
    title:"Crystal Ecommerce Web Design",
    github:"https://github.com/Mahto22",
    demo:"https://dribbble.com/shots/21073571-Crystal-Ecommerce-Web-Design"
  },
  {
    id:2,
    image:IMG2,
    title:"Crystal Ecommerce Web Design",
    github:"https://github.com/Mahto22",
    demo:"https://dribbble.com/shots/21073571-Crystal-Ecommerce-Web-Design"
  },
  {
    id:3,
    image:IMG3,
    title:"Crystal Ecommerce Web Design",
    github:"https://github.com/Mahto22",
    demo:"https://dribbble.com/shots/21073571-Crystal-Ecommerce-Web-Design"
  },
  {
    id:4,
    image:IMG4,
    title:"Crystal Ecommerce Web Design",
    github:"https://github.com/Mahto22",
    demo:"https://dribbble.com/shots/21073571-Crystal-Ecommerce-Web-Design"
  },
  {
    id:5,
    image:IMG5,
    title:"Crystal Ecommerce Web Design",
    github:"https://github.com/Mahto22",
    demo:"https://dribbble.com/shots/21073571-Crystal-Ecommerce-Web-Design"
  },
  {
    id:6,
    image:IMG6,
    title:"Crystal Ecommerce Web Design",
    github:"https://github.com/Mahto22",
    demo:"https://dribbble.com/shots/21073571-Crystal-Ecommerce-Web-Design"
  }
]

const Portfolio = () =>{
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id, image,title,github,demo}) =>{
          return(
            <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title}></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
          );
        })
      }
      </div>
    </section>
  );
};

export default Portfolio;