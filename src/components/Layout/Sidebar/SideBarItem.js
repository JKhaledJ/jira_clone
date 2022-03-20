const SideBarItem = (props) => {
  return (
    <div className=" pl-5 py-3 hover:bg-indigo-400 " onClick={props.clicked}>
      <a className="flex align-middle ">
        {props.children}
        {props.isSideBarOpen && (
          <p className="pl-3 pr-5 text-sm text-white align-bottom uppercase">
            {props.text}
          </p>
        )}
      </a>
    </div>
  );
};

export default SideBarItem;
