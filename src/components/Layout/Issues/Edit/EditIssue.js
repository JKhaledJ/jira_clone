import { useState } from "react";
import { FaLink, FaRegPaperPlane, FaTrashAlt } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import Button from "../../../../Utilities/Button";
import DropDown from "../../../../Utilities/DropDown";
const EditIssue = (props) => {
  const feedback = "Give Feedback";
  const copyLink = "Copy Link";
  const [content, setContent] = useState(
    "Each issue has a single reporter but can have multiple assignees."
  );
  const [alert, SetAlert] = useState("");
  const textAreaAdjust = (element) => {
    setContent(element.target.value);
    element.target.style.height = "";
    element.target.style.height = element.target.scrollHeight + 8 + "px";
    if (element.target.value.length > 200) {
      SetAlert("Must be at most 200 characters");
    } else if (element.target.value === "") {
      SetAlert("Text field is required");
    } else {
      SetAlert("");
    }
  };
  return (
    <div className="h-full w-full p-5 ">
      {/* Header */}
      <div className="flex justify-between items-center align-middle w-full">
        <div className="w-36">
          <DropDown
            showArrowDown={false}
            className=" hover:bg-gray-100 border-none"
          />
        </div>
        <div className="flex justify-start gap-2 items-center">
          <Button text={feedback} className="hover:bg-gray-200  ">
            <FaRegPaperPlane />
          </Button>
          <Button text={copyLink} className=" hover:bg-gray-200">
            <FaLink />
          </Button>

          <Button className=" hover:bg-gray-200">
            <FaTrashAlt />
          </Button>

          <Button onClick={props.closeModal} className="hover:bg-gray-200">
            <GrClose />
          </Button>
        </div>
      </div>

      {/* Body */}
      <div className="flex mt-5 gap-3">
        <div className="w-7/12">
          <textarea
            onChange={textAreaAdjust}
            className="w-full hover:bg-gray-200 text-2xl rounded focus:outline-blue-500 overflow-auto resize-none p-2"
            value={content}
          ></textarea>

          <h1 className="font bold text-red-600">{alert}</h1>
        </div>
        <div className="grow ">
          <h2>second data</h2>
        </div>
      </div>
    </div>
  );
};

export default EditIssue;
