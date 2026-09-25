import { experience } from '../data/portfolio.js';

function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <h2 className="about-label">01 — About</h2>
        <div className="about-text">
          <p>
            I'm a software engineer focused on <strong>full-stack development</strong> and building practical web
            solutions. I enjoy turning ideas into products that solve real business problems and make a measurable
            difference.
          </p>
          <p>
            At <strong>Core Value Software Solutions</strong>, I work on developing and optimizing business systems,
            integrating reliable web workflows, and delivering solutions that improve user experience and operational
            efficiency — from healthcare platforms to business operations systems.
          </p>
          <div className="about-career">
            <div className="about-career-label">Work</div>
            {experience.map((item) => (
              <div className="about-career-item" key={`${item.company}-${item.role}`}>
                <div className="about-career-date">{item.date}</div>
                <div>
                  <h3 className="about-career-role">{item.role}</h3>
                  <div className="about-career-company">
                    <div className="about-career-company-name">
                      <img className="about-career-logo" src="/images/core-value-icon.png" alt="" />
                      <span>{item.company}</span>
                    </div>
                  </div>
                  <div className="about-career-location">{item.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
