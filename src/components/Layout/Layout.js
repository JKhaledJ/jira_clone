import Navigation from "./Navigation/Navigation";
import Sidebar from "./Sidebar/Sidebar";
const Layout = (props) => {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <Navigation />
    </div>
  );
};

export default Layout;
