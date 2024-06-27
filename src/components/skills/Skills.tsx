import { useState, useEffect } from "react";
import type { SkillProps } from "./Skills.types";

const Skills = ({ skills }: SkillProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1900);
  }, []);

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
