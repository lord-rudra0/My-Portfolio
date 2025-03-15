// import React from 'react';

const skills = [
  "C", "C#", "Java", "Python", "JavaScript", "TypeScript", "AssemblyScript",
  "HTML5", "CSS3", "React", "Node.js", "Express.js", "EJS", "Bootstrap",
  "Tailwind CSS", "FastAPI", "Flask", "Jinja", "NPM", "Vite", "MongoDB",
  "MySQL", "SQLite", "Vercel", "Render", "Netlify", "Heroku", "Firebase",
  "Figma", "Canva", "NumPy", "Pandas", "TensorFlow", "Git", "GitHub",
  "Unity", "Postman", "Docker"
];

const SkillsRow = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-scroll">
        {skills.concat(skills).map((skill, index) => (
          <span 
            key={index} 
            className="skill-button mx-2 transition-transform duration-500 ease-in-out transform hover:scale-110 animate-word"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {skill}
          </span>
        ))}
      </div>
      <style jsx>{`
        .animate-scroll {
          animation: scroll 20s linear infinite;
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

export default SkillsRow; 