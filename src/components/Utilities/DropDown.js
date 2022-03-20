import { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown, MdFileDownloadDone } from "react-icons/md";
import Aux from "../../Hoc/Auxiliary";
// import logo from "../../assets/logo.png";

const DropDown = (props) => {
  const [show, showHandler] = useState(false);
  const fullList = [
    { icon: <MdFileDownloadDone />, text: "task1", key: 1 },
    { icon: <MdFileDownloadDone />, text: "task2", key: 2 },
    {
      image:
        "https://media.istockphoto.com/photos/termination-policy-guide-on-the-wooden-surface-picture-id1326062521?s=612x612",
      text: "task3",
      key: 3,
    },
  ];
  const ref = useRef(null);
  const [data, SetData] = useState(fullList);
  const [SelectedData, SetSelectedData] = useState(fullList[0]);
  const [initialInputData, setInitialInputData] = useState("");
  function SearchItem(event) {
    if (initialInputData == "") return SetData(fullList);
    SetData(
      fullList.filter(
        (item) =>
          item.key !== SelectedData.key &&
          item.text
            .toLocaleLowerCase()
            .includes(event.target.value.toLocaleLowerCase())
      )
    );
  }

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      showHandler(false);
    }
  };

  function selectItemHandler(item) {
    SetSelectedData(item);
    showHandler(false);
  }

  function clearSearch() {
    SetSelectedData(null);
    setInitialInputData("");
    SetData(fullList);
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <Aux>
      <div className="relative">
        <div
          onClick={() => showHandler(!show)}
          className="flex justify-between border border-gray-300 bg-gray-100 rounded p-1"
        >
          {
            <div className="flex justify-start gap-2 px-2 items-center">
              {SelectedData == null ? (
                "Select"
              ) : SelectedData.icon ? (
                SelectedData.icon
              ) : (
                <img
                  src={SelectedData.image}
                  className="w-5 h-5 rounded-full"
                />
              )}
              <p>{SelectedData && SelectedData.text}</p>
            </div>
          }
          <div className="text-xl">
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
        {show && (
          <div
            className="border border-gray-100 rounded shadow-xl absolute bg-white w-full"
            ref={ref}
          >
            <div className="flex justify-between">
              <input
                value={initialInputData}
                placeholder="Search"
                className="w-full grow focus:outline-none py-2 px-4"
                onChange={(event) => {
                  setInitialInputData(event.target.value);
                  SearchItem(event);
                }}
              />

              {SelectedData && (
                <p className="cursor-pointer py-1 px-4" onClick={clearSearch}>
                  X
                </p>
              )}
            </div>
            {data.length == 0 ? (
              <div className="px-4 py-2 text-gray-400">No results</div>
            ) : (
              data.map(
                (item) =>
                  item !== SelectedData && (
                    <div
                      onClick={() => selectItemHandler(item)}
                      key={item.key}
                      className="flex justify-start gap-2 px-4 py-2 items-center hover:bg-blue-300"
                    >
                      {item.icon ? (
                        item.icon
                      ) : (
                        <img
                          src={item.image}
                          className="w-5 h-5 rounded-full"
                        />
                      )}
                      <p>{item.text}</p>
                    </div>
                  )
              )
            )}
          </div>
        )}
      </div>
    </Aux>
  );
};

export default DropDown;
