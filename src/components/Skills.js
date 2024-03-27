import React from 'react';
import skills from './data/Skills';

const SkillsComponent = () => {
  return (
    <div className="skills-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skills.skillsArray.map((skill, index) => (
        <div key={index} className="skill bg-gray-800 rounded-lg p-4 flex items-center">
          <img src={skill.imageUrl} alt={skill.name} className="skill-image w-12 h-12 sm:w-16 sm:h-16 object-cover mr-4" />
          <div className="skill-details">
            <div className="skill-name text-base sm:text-lg font-semibold text-white">{skill.name}</div>
            <div className="skill-percentage text-gray-300">{skill.percentage}%</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsComponent;
