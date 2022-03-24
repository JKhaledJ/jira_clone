import Issue from "./Issue";

const IssueContainer = (props) => {
  return (
    <div className="w-72 h-96 bg-gray-100 rounded px-1">
      <h1 className="p-3 uppercase text-gray-500 text-sm">Backlog 3</h1>
      <div>
        <Issue />
        <Issue />
      </div>
    </div>
  );
};

export default IssueContainer;
