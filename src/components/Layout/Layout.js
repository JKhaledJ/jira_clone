import Navigation from "./Navigation/Navigation";
import Sidebar from "./Sidebar/Sidebar";
import KanbanBoard from "./KanbanBoard/KanbanBoard";
const Layout = (props) => {
  return (
    <div>
      <Sidebar />
      <div className="flex ml-16 ">
        <div className="w-56">
          <Navigation />
        </div>
        <KanbanBoard className="grow" />
      </div>
    </div>
  );
};

export default Layout;
