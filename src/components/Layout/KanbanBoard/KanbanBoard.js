import BreadCrumb from "../../../Utilities/BreadCrumb";
import Input from "../../../Utilities/Input";
import { FaGithub } from "react-icons/fa";
import Contributors from "../../../Utilities/Contributors";
import { useState } from "react";
import IssueContainer from "../Issues/Show/IssueContainer";
const KanbanBoard = (props) => {
  const [MyIssues, setMyIssues] = useState(false);
  const [RecentlyIssues, setRecentlyIssues] = useState(false);
  function reset() {
    setMyIssues(false);
    setRecentlyIssues(false);
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
          <Contributors className="w-9 h-9" hover={true} />
          <div
            className={`px-2 py-1 rounded cursor-pointer
            ${MyIssues ? "bg-blue-200" : "over:bg-gray-200"} `}
            onClick={() => setMyIssues(!MyIssues)}
          >
            <h1>Only My Issues</h1>
          </div>
          <div
            className={`px-2 py-1 rounded cursor-pointer
            ${RecentlyIssues ? "bg-blue-200" : "over:bg-gray-200"} `}
            onClick={() => setRecentlyIssues(!RecentlyIssues)}
          >
            <h1>Recently Updated</h1>
          </div>
          {(MyIssues || RecentlyIssues) && (
            <div
              className={`cursor-pointer border-l-2 pl-3`}
              onClick={() => reset()}
            >
              <h1>Clear all</h1>
            </div>
          )}
        </div>

        {/* Body section */}
        <div className="w-full h-full mt-6 flex justify-start gap-2">
          <IssueContainer />
          <IssueContainer />
          <IssueContainer />
          <IssueContainer />
        </div>
      </div>
    </div>
  );
};
export default KanbanBoard;
