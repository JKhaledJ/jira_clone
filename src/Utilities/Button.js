import { FaGithub, FaRegPaperPlane } from "react-icons/fa";

const Button = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`flex gap-1 px-2 py-1 cursor-pointer items-center rounded  ${props.className}`}
    >
      {props.children}

      {props.tex !== "" && <h1> {props.text}</h1>}
    </div>
  );
};

export default Button;
