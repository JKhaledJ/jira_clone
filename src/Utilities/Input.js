import { FiSearch } from "react-icons/fi";
const Input = (props) => {
  return (
    <div className="relative items-center w-40 border border-gray-300 bg-gray-100 rounded ">
      <div className="absolute top-1/2 left-2 -translate-y-1/2 pointer-events-none">
        <FiSearch />
      </div>
      <input className="py-1 pl-8 pr-2 bg-transparent focus:outline-blue-500 w-40 focus:bg-white" />
    </div>
  );
};
export default Input;
