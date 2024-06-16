import { useState } from "react";
import { SkillProps } from "./Skills.types";

const Skills = ({ skills }: SkillProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};

export default Skills;
