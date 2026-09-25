import { projects } from '../data/portfolio.js';

function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sec-num">03 — Selected Work</div>
            <h2 className="sec-title">Featured Projects</h2>
          </div>
        </div>
        <div className="proj-list">
          {projects.map((project) => (
            <div className="proj-row" key={project.title}>
              <div>
                <h3 className="proj-title">{project.title}</h3>
                <div className="proj-desc">{project.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
