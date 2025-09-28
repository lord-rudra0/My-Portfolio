import PropTypes from 'prop-types';

const skills = [
  "C", "C#", "Java", "Python", "JavaScript", 
  "HTML5", "CSS3", "React", "Node.js", "Express.js", "EJS", "Bootstrap",
  "Tailwind CSS", "FastAPI", "Flask", "Jinja", "NPM", "Vite", "MongoDB",
  "MySQL", "SQLite", "Vercel", "Render", "Netlify", "Heroku", "Firebase",
  "Figma", "Canva", "Git", "GitHub",
  "Unity", "Postman",
];

const SkillsRow = ({ filterText = '' }) => {
  const q = (filterText || '').toString().trim().toLowerCase();
  const filteredSkills = skills.filter((skill) => skill.toLowerCase().includes(q));

  // Helper to highlight matched substring
  const highlight = (skill) => {
    if (!q) return skill;
    const idx = skill.toLowerCase().indexOf(q);
    if (idx === -1) return skill;
    const before = skill.slice(0, idx);
    const match = skill.slice(idx, idx + q.length);
    const after = skill.slice(idx + q.length);
    return (
      <span>
        {before}<mark className="bg-yellow-300 text-black px-1 rounded">{match}</mark>{after}
      </span>
    );
  };

  const showInfinite = q === '';

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className={`inline-block ${showInfinite ? 'animate-scroll' : ''}`}>
        {filteredSkills.length === 0 ? (
          <span className="skill-button mx-2">No skills found</span>
        ) : (
          (showInfinite ? filteredSkills.concat(filteredSkills) : filteredSkills).map((skill, index) => (
            <span 
              key={`${skill}-${index}`} 
              className="skill-button mx-2 transition-transform duration-500 ease-in-out transform hover:scale-110 animate-word"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {highlight(skill)}
            </span>
          ))
        )}
      </div>

      <style>{`
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-word {
          opacity: 0;
          animation: fadeIn 0.5s forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        .skill-button {
          padding: 5px 10px;
          border-radius: 20px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
          color: #ffffff;
          border: 1px solid transparent;
          transition: background 0.3s, border 0.3s;
          display: inline-block;
        }

        .skill-button:hover {
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3));
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        @media (prefers-color-scheme: dark) {
          .skill-button {
            background: linear-gradient(90deg, rgba(34, 34, 34, 0.8), rgba(34, 34, 34, 0.6));
            color: #ffffff;
          }

          .skill-button:hover {
            background: linear-gradient(90deg, rgba(34, 34, 34, 0.9), rgba(34, 34, 34, 0.7));
            border: 1px solid rgba(255, 255, 255, 0.5);
          }
        }

        @media (prefers-color-scheme: light) {
          .skill-button {
            background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
            color: #000000;
          }

          .skill-button:hover {
            background: linear-gradient(90deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3));
            border: 1px solid rgba(0, 0, 0, 0.5);
          }
        }
      `}</style>
    </div>
  );
};

SkillsRow.propTypes = {
  filterText: PropTypes.string
};

export default SkillsRow;