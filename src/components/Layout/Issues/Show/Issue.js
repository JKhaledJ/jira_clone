import { FaArrowUp, FaBookmark } from "react-icons/fa";
import Contributors from "../../../../Utilities/Contributors";
import Aux from "../../../../Hoc/Auxiliary";
import Modal from "../../../../Utilities/Modal";
import EditIssue from "../Edit/EditIssue";
import React, { useState } from "react";
const Issue = (props) => {
  const [ShowEditIssue, SetShowEditIssue] = useState(false);
  return (
    <Aux>
      <div
        onClick={() => SetShowEditIssue(true)}
        className="w-full bg-white p-2 mt-1 text-sm hover:bg-gray-200 cursor-pointer text-gray-800 shadow-md"
      >
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

      {ShowEditIssue && (
        <Modal
          showModal={ShowEditIssue}
          closeModal={SetShowEditIssue}
          className="top-10 left-1/2 w-8/12 -translate-x-1/2 rounded"
        >
          <EditIssue closeModal={() => SetShowEditIssue(false)} />
        </Modal>
      )}
    </Aux>
  );
};

export default Issue;
