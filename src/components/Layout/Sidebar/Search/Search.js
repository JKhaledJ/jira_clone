import Aux from "../../../../Hoc/Auxiliary";
import SearchItem from "./SearchItem";
import { FiSearch } from "react-icons/fi";

const Search = (props) => {
  return (
    <Aux>
      <div className="p-8">
        <div className="pb-8">
          <div className="flex gap-4 border-b-2 border-blue-700 items-center rounded pb-2">
            <FiSearch className="text-xl text-gray-600" />
            <input
              className="w-10/12 focus:outline-none text-xl"
              placeholder="Search issues by summary, description...."
            />
          </div>
        </div>
        <h1 className="text-left text-sm font-bold text-gray-500 pb-4">
          RECENT ISSUES
        </h1>

        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
      </div>
    </Aux>
  );
};

export default Search;
