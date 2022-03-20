import { useState } from "react";

const NavItem = (props) => {
  const [isNotAllowed, setIsAllowed] = useState(false);

  return (
    <div
      className={`flex  pl-2 py-3 ${
        !props.isNotAllowed ? "hover:bg-gray-200" : "cursor-not-allowed"
      }`}
      onMouseEnter={() => props.isNotAllowed && setIsAllowed(true)}
      onMouseLeave={() => props.isNotAllowed && setIsAllowed(false)}
    >
      <a className="flex align-middle " href="#">
        {props.children}

        {isNotAllowed ? (
          <p className="pl-3 pr-5 text-sm align-bottom cursor-not-allowed bg-gray-500">
            NOT ALLOWED
          </p>
        ) : (
          <p className="pl-3 pr-5 text-sm align-bottom">{props.text}</p>
        )}
      </a>
    </div>
  );
};

export default NavItem;
