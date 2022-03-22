import Backdrop from "./Backdrop";
import { useEffect, useState } from "react";
import Aux from "../Hoc/Auxiliary";
const Modal = (props) => {
  const { backdrop = true, closeButton = false } = props.options || {};
  return props.showModal ? (
    <Aux>
      <Backdrop />
      <div
        className="z-50 fixed top-0 w-full h-full overflow-y-auto"
        onClick={() => props.closeModal(false)}
      >
        <div
          className={`absolute z-50 bg-white shadow-xl w-1/2 text-gray-600 ${props.className} `}
          onClick={(e) => e.stopPropagation()}
        >
          {closeButton && (
            <button
              onClick={() => props.closeModal(false)}
              className=" absolute -right-5 top-3 bg-white border border-gray-200 rounded shadow-md text-2xl px-4 py-2"
            >
              X
            </button>
          )}
          {props.children}
        </div>
      </div>
    </Aux>
  ) : (
    ""
  );
};
export default Modal;
