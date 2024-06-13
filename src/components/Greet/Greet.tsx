import { GreetProps } from "./Greet.types";

const Greet = ({ name = "User" }: GreetProps) => {
  return (
    <div>
      <p>Hello {name}</p>
    </div>
  );
};

export default Greet;
