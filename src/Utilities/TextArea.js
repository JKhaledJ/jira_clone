import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useEffect, useRef } from "react";

const TextArea = (props) => {
  const editorArea = useRef(null);
  useEffect(() => {
    const options = {
      modules: {
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ color: [] }, { background: [] }],
          ["clean"],
        ],
      },
      placeholder: "Description...",
      theme: "snow",
    };
    var editor = new Quill(editorArea.current, options);
  }, []);

  return <div style={{ height: "140px" }} ref={editorArea}></div>;
};
export default TextArea;
