import BreadCrumb from "../../../Utilities/BreadCrumb";
import Input from "../../../Utilities/Input";
import { FaGithub } from "react-icons/fa";
import Contributors from "../../../Utilities/Contributors";
import { useState } from "react";
const KanbanBoard = (props) => {
  const [filterMyIssues, setFilterMyIssues] = useState(false);
  const [filterIssues, setFilterIssues] = useState(false);
  function reset() {
    setFilterIssues(false);
    setFilterMyIssues(false);
  }
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
        <div className="flex gap-3 items-center">
          <Input />
          <Contributors />
          <div
            className={`px-2 py-1 rounded cursor-pointer
            ${filterMyIssues ? "bg-blue-200" : "over:bg-gray-200"} `}
            onClick={() => setFilterMyIssues(!filterMyIssues)}
          >
            <h1>Only My Issues</h1>
          </div>
          <div
            className={`px-2 py-1 rounded cursor-pointer
            ${filterIssues ? "bg-blue-200" : "over:bg-gray-200"} `}
            onClick={() => setFilterIssues(!filterIssues)}
          >
            <h1>Recently Updated</h1>
          </div>
          {(filterIssues || filterMyIssues) && (
            <div
              className={`cursor-pointer border-l-2 pl-3`}
              onClick={() => reset()}
            >
              <h1>Clear all</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default KanbanBoard;
