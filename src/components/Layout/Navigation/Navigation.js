import Aux from "../../../Hoc/Auxiliary";
import logo from "../../../assets/logo.PNG";
import { CgClapperBoard, CgNotes } from "react-icons/cg";
import { FiSettings, FiServer, FiTruck } from "react-icons/fi";
import { AiOutlineRise } from "react-icons/ai";
import { GrCube } from "react-icons/gr";
import SideBarItem from "../Sidebar/SideBarItem";
import NavItem from "./NavItem";
const Navigation = (props) => {
  return (
    <Aux>
      <div className="min-h-screen ml-16 w-56 bg-gray-100 border-r border-gray-300 p-5">
        <div className=" flex mb-7">
          <img src={logo} />
          <div className="text-xs px-3 text-gary-600">
            <h1 className="font-bold">singularity 1.0</h1>
            <p>Software Project</p>
          </div>
        </div>

        <NavItem text="Kanban Board" isNotAllowed={false}>
          <CgClapperBoard className="text-xl" />
        </NavItem>
        <NavItem text="Project Settings" isNotAllowed={false}>
          <FiSettings className="text-xl " />
        </NavItem>
        <hr className="border-gray-300 my-4" />
        <NavItem text="Releases" isNotAllowed={true}>
          <FiTruck className="text-xl " />
        </NavItem>

        <NavItem text="Issues and filters" isNotAllowed={true}>
          <FiServer className="text-xl " />
        </NavItem>
        <NavItem text="Pages" isNotAllowed={true}>
          <CgNotes className="text-xl " />
        </NavItem>
        <NavItem text="Reports" isNotAllowed={true}>
          <AiOutlineRise />
        </NavItem>

        <NavItem text="Components" isNotAllowed={true}>
          <GrCube />
        </NavItem>
      </div>
    </Aux>
  );
};

export default Navigation;
