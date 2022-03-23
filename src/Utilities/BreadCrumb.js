const BreadCrumb = (props) => {
  let titles = ["Projects", "singularity 1.0", "Kanban Board"];
  return (
    <div className="flex justify-start w-full">
      {titles.map((title, index) => (
        <h1>
          {title}{" "}
          {titles.length - 1 !== index && <span className={"p-2"}>/</span>}
        </h1>
      ))}
    </div>
  );
};

export default BreadCrumb;
