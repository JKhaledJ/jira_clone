import BreadCrumb from "../../../Utilities/BreadCrumb";
import Input from "../../../Utilities/Input";
import { FaGithub } from "react-icons/fa";
const KanbanBoard = (props) => {
  return (
    <div className={props.className}>
      <div className="p-9 ">
        <BreadCrumb />
        <div className="flex justify-between items-center">
          <h1 className=" text-2xl py-2">Kanban Board</h1>
          <div className="flex justify-between gap-2 px-3 py-1  items-center rounded bg-gray-200">
            <FaGithub />
            <h1> GitHub Repo</h1>
          </div>
        </div>
        <Input />
      </div>
    </div>
  );
};
export default KanbanBoard;
