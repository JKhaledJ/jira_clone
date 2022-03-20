import DropDown from "../../../Utilities/DropDown";

const CreateIssue = (props) => {
  return (
    <div className="p-5">
      <h1 className="text-xl">Create issue</h1>
      <div>
        <h1>Issue type</h1>
        <DropDown />
      </div>
    </div>
  );
};

export default CreateIssue;
