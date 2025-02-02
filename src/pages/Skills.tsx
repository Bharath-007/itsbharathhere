import React from "react";

const Skills = () => {
  return   <div>
    <h2 className="text-2xl font-semibold text-blue-300">Skills</h2>
    <ul className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
      {["React.js", "React Native", "TypeScript", "Redux Toolkit", "Material-UI", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Docker", "Linux", "Micro Frontend Architecture"].map((skill) => (
        <li key={skill} className="bg-gray-800 p-2 rounded-lg text-center">
          {skill}
        </li>
      ))}
    </ul>
  </div>
};

export default Skills;
