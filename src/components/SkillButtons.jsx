import React from 'react';

const skills = [
  "React", "Node.js", "Express", "MongoDB", "Stripe", "Redux"
];

const SkillButtons = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-4">
      {skills.map((skill, index) => (
        <button 
          key={index} 
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          {skill}
        </button>
      ))}
      <style jsx>{`
        button {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default SkillButtons; 