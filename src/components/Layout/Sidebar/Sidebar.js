import React, { useState } from "react";
import Logo from "../../../assets/favicon.png";
import Aux from "../../../Hoc/Auxiliary";
import { FiSearch } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineQuestionCircle } from "react-icons/ai";
import SideBarItem from "./SideBarItem";
import Search from "./Search/Search";
import Modal from "../../../Utilities/Modal";
const Sidebar = (props) => {
  const [showModalSearch, showMoalSearchHandler] = useState(false);
  const [showModalCreate, showModalCreateHandler] = useState(false);
  const [isSideBarOpen, openSideBar] = useState(false);
  return (
    <Aux>
      <div
        className={`min-h-screen ${
          isSideBarOpen ? "w-48" : "w-16"
        }  bg-blue-800  fixed top-0 left-0 z-30`}
        onMouseEnter={() => openSideBar(true)}
        onMouseLeave={() => openSideBar(false)}
      >
        <div className="flex flex-col py-6 justify-between min-h-screen">
          <div>
            <SideBarItem>
              <FaReact className="text-2xl text-white" />
            </SideBarItem>
            <SideBarItem
              text="Search issue"
              isSideBarOpen={isSideBarOpen}
              clicked={() => {
                showMoalSearchHandler(true);
                openSideBar(false);
              }}
            >
              <FiSearch className="text-2xl text-white" />
            </SideBarItem>
            {showModalSearch && (
              <Modal
                showModal={showModalSearch}
                closeModal={showMoalSearchHandler}
              >
                <Search />
              </Modal>
            )}
            <SideBarItem
              text="Create issue"
              isSideBarOpen={isSideBarOpen}
              clicked={() => {
                showModalCreateHandler(true);
                openSideBar(false);
              }}
            >
              <AiOutlinePlus className="text-2xl text-white" />
            </SideBarItem>
            <Modal
              showModal={showModalCreate}
              closeModal={showModalCreateHandler}
            >
              <Search />
            </Modal>
          </div>

          <div>
            <SideBarItem text="About" isSideBarOpen={isSideBarOpen}>
              <AiOutlineQuestionCircle className="text-2xl text-white" />
            </SideBarItem>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default Sidebar;
