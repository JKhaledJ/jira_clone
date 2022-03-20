const Backdrop = (props) => {
  return (
    <div
      className="fixed z-50 bg-gray-900 opacity-50 w-full h-full top-0 left-0"
      onClick={props.closeModal}
    ></div>
  );
};
export default Backdrop;
