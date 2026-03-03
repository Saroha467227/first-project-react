import React from 'react';

function FeatureCard(props) {
  return (
    <div className="feature-card">
      <div className="icon">{props.icon}</div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
}

function Features() {
  return (
    <section className="features">
      <FeatureCard icon="📚" title="500+ Problems" desc="All topics covered" />
      <FeatureCard icon="🎯" title="Track Progress" desc="Know your strengths" />
      <FeatureCard icon="🧠" title="Smart Revision" desc="Never forget" />
    </section>
  );
}

export default Features;