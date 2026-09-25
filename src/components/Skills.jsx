import { skillGroups } from '../data/portfolio.js';

const skillLogos = {
  Python: 'python',
  TypeScript: 'typescript',
  Java: 'java',
  Angular: 'angular',
  React: 'react',
  SCSS: 'scss',
  Spring: 'spring',
  'REST API': 'swagger',
  Mongo: 'mongo',
  MariaDB: 'mariadb',
  DBMS: 'dbms',
  Git: 'git',
  Github: 'github',
  Docker: 'docker',
  Linux: 'linux',
};

function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sec-num">02 — Technologies</div>
          </div>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.field}>
              <div className="skill-group-head">
                <h3 className="skill-group-title">{group.field}</h3>
              </div>
              <div className="skills-list">
                {group.skills.map((skill) => (
                  <div className="skill-pill" key={skill}>
                    <span>{skill}</span>
                    <img className="skill-logo" src={`/images/tech/${skillLogos[skill]}.svg`} alt={`${skill} logo`} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
