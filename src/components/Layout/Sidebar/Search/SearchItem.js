import { FaBookmark } from "react-icons/fa";

const SearchItem = (props) => {
  return (
    <div className="flex gap-4 pl-4 pt-3 ">
      <div className="text-xl text-green-700 ">
        <FaBookmark />
      </div>
      <div className="text-sm text-left">
        <p>Each issue has a single reporter but can have multiple assignees.</p>
        <p className="uppercase">story-590780</p>
      </div>
    </div>
  );
};

export default SearchItem;
