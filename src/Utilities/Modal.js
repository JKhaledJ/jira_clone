import Backdrop from "./Backdrop";
import { useEffect, useState } from "react";
import Aux from "../Hoc/Auxiliary";
const Modal = (props) => {
  const { backdrop = true, closeButton = false } = props.options || {};
  return props.showModal ? (
    <Aux>
      <Backdrop closeModal={() => props.closeModal(false)} />
      <div className="fixed z-50 bg-white w-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        {props.children}
      </div>
    </Aux>
  ) : (
    ""
  );
};
export default Modal;
