import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            exercitationem alias nesciunt ex ducimus nam! Dicta ducimus in, sint
            laborum deserunt excepturi quasi tenetur! Ratione, officia sit
            labore assumenda, autem quas recusandae veritatis odit qui deserunt
            perferendis accusamus? Velit, adipisci consequuntur omnis rerum
            assumenda minus expedita! Eum molestiae beatae quae.
          </p>
          <button className="btn">Start now</button>
        </article>
        <section className="hero-images">
          <img src={phoneImg} alt="phone img" className="phone-img" />
        </section>
      </div>
    </section>
  );
};

export default Hero;
