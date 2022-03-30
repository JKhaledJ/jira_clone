import Backdrop from "./Backdrop";
import Aux from "../Hoc/Auxiliary";
import ReactDOM from "react-dom";
const Modal = (props) => {
  const { backdrop = true, closeButton = false } = props.options || {};
  const Root = document.getElementById("root");
  return (
    props.showModal &&
    ReactDOM.createPortal(
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
      </Aux>,
      Root
    )
  );
};
export default Modal;
