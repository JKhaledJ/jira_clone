import Backdrop from "./Backdrop";
import { useEffect, useState } from "react";
import Aux from "../Hoc/Auxiliary";
const Modal = (props) => {
  const { backdrop = true, closeButton = false } = props.options || {};
  return props.showModal ? (
    <Aux>
      <Backdrop closeModal={() => props.closeModal(false)} />
      <div
        className={`fixed z-50 bg-white w-1/2 text-gray-600 ${props.className} `}
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
    </Aux>
  ) : (
    ""
  );
};
export default Modal;
