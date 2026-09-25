import { useState } from 'react';
import { socialLinks } from '../data/portfolio.js';

function Hero() {
  const [isPortraitLoaded, setIsPortraitLoaded] = useState(false);

  return (
    <section className="hero" aria-labelledby="intro-title">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Yangon, Myanmar</div>
          <h1 className="name" id="intro-title">
            Ye Zarni Ko
          </h1>
          <p className="role">Software Engineer &nbsp;·&nbsp; Full-Stack Developer</p>
          <p className="lede">
            I turn ideas into products that solve real business problems — from web applications to the systems that
            support them. Currently at Core Value Software Solutions, building reliable software for everyday business.
            <span className="hero-inline-social">
              {socialLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  aria-label={link.label}
                  title={link.label}
                  target="_blank"
                  rel="me noreferrer"
                >
                  {link.label === 'GitHub' ? (
                    <img className="hero-social-icon" src="/images/tech/github.svg" alt="" />
                  ) : (
                    <img className="hero-social-icon hero-linkedin-icon" src="/images/linkedin-logo-gray.png" alt="" />
                  )}
                </a>
              ))}
            </span>
          </p>
          <div className="cta-row">
            <a className="btn btn-solid" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
        <div className={`portrait${isPortraitLoaded ? ' is-loaded' : ''}`}>
          {!isPortraitLoaded && <div className="portrait-skeleton" aria-hidden="true" />}
          <img
            src="/images/portrait.png?v=transparent-5"
            alt="Ye Zarni Ko"
            loading="lazy"
            decoding="async"
            onLoad={() => setIsPortraitLoaded(true)}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
