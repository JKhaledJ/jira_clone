import BreadCrumb from "../../../Utilities/BreadCrumb";
import Input from "../../../Utilities/Input";
import { FaGithub } from "react-icons/fa";
import Contributors from "../../../Utilities/Contributors";
import { useState } from "react";
import IssueContainer from "../Issues/Show/IssueContainer";
import Button from "../../../Utilities/Button";
const KanbanBoard = (props) => {
  const [MyIssues, setMyIssues] = useState(false);
  const [RecentlyIssues, setRecentlyIssues] = useState(false);
  function reset() {
    setMyIssues(false);
    setRecentlyIssues(false);
  }
  return (
    <div className={props.className}>
      <div className="p-9">
        <BreadCrumb />
        <div className="flex justify-between items-center">
          <h1 className=" text-2xl py-2">Kanban Board</h1>
          <Button text="GitHub Repo" className="bg-gray-200">
            <FaGithub />
          </Button>
        </div>
        <div className="flex gap-3 items-center">
          <Input />
          <Contributors className="w-9 h-9" hover={true} />
          <Button
            className={`
            ${MyIssues ? "bg-blue-200" : "hover:bg-gray-200"}`}
            onClick={() => setMyIssues(!MyIssues)}
            text="Only My Issues"
          ></Button>
          <Button
            className={`
            ${RecentlyIssues ? "bg-blue-200" : "hover:bg-gray-200"}`}
            onClick={() => setRecentlyIssues(!RecentlyIssues)}
            text="Recently Updated"
          ></Button>
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
        <div className="h-full mt-6 flex justify-start gap-2">
          <IssueContainer title="BACKLOG 1 of 4" />
          <IssueContainer title="SELECTED FOR DEVELOPMENT 2" />
          <IssueContainer title="IN PROGRESS 1" />
          <IssueContainer title="DONE 1 of 2" />
        </div>
      </div>
    </div>
  );
};
export default KanbanBoard;
