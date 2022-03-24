import { FaArrowUp, FaBookmark } from "react-icons/fa";
import Contributors from "../../../../Utilities/Contributors";
const Issue = (props) => {
  return (
    <div className="w-full bg-white p-2 mt-1 text-sm hover:bg-gray-200 cursor-pointer text-gray-800 shadow-md">
      <p>
        Try dragging issues to different columns to transition their status.
      </p>
      <div className="flex justify-between mt-4 items-center align-middle">
        <div className="flex justify-center gap-1">
          <FaBookmark className="text-green-500" />
          <FaArrowUp className="text-red-400" />
        </div>
        <div>
          <Contributors className="w-7 h-7" hover={false} />
        </div>
      </div>
    </div>
  );
};

export default Issue;
