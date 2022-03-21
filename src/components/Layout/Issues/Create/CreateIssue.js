import DropDown from "../../../Utilities/DropDown";
import TextArea from "../../../../Utilities/TextArea";
const CreateIssue = (props) => {
  return (
    <div className="p-5 ">
      <h1 className="text-xl">Create issue</h1>
      <div className="mb-5">
        <h1 className="text-gray-500 text-xs font-bold py-2">Issue type</h1>
        <DropDown />
        <h1 className="text-gray-500 text-xs font-bold py-2">
          Start typing to get a list of possible matches.
        </h1>
      </div>
      <hr className="mb-5" />
      <div className="mb-5">
        <h1 className="text-gray-500 text-xs font-bold py-2">Short Summary</h1>
        <input className="px-4 py-2 w-full bg-gray-200  focus:outline-blue-500" />
        <h1 className="text-gray-500 text-xs font-bold py-2">
          Concisely summarize the issue in one or two sentences.
        </h1>
      </div>
      <h1 className="text-gray-500 text-xs font-bold py-2">Description</h1>
      <TextArea />
      <h1 className="text-gray-500 text-xs font-bold py-2">
        Describe the issue in as much detail as you'd like.
      </h1>

      <div className="mb-5">
        <h1 className="text-gray-500 text-xs font-bold py-2">Reporter</h1>
        <DropDown />
      </div>

      <div className="mb-5">
        <h1 className="text-gray-500 text-xs font-bold py-2">Assignees</h1>
        <DropDown />
      </div>

      <div className="mb-5">
        <h1 className="text-gray-500 text-xs font-bold py-2">Priority</h1>
        <DropDown />
      </div>
    </div>
  );
};

export default CreateIssue;
