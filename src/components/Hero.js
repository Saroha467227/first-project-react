import React from 'react';

function Hero(props) {
  return (
    <section className="hero">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <button className="cta-btn" onClick={() => alert(props.buttonText)}>
        {props.buttonText}
      </button>
    </section>
  );
}

export default Hero;