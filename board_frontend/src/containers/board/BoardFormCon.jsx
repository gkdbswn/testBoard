
import { useState } from "react";
import BoardFormView from "../../components/board/BoardFormView";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BoardFormCon() {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setTitle(value);
    } else if (name === "author") {
      setAuthor(value);
    } else if (name === "content") {
      setContent(value);
    }
  }

  const handleSave = async () => {
    if (!title.trim()) {
        alert("제목을 입력해주세요.");
        return;
    }
    if (!author.trim()) {
        alert("작성자를 입력해주세요.");
        return;
    }
    if (!content.trim()) {
        alert("내용을 입력해주세요.");
        return;
    }
    try {
      const response = await axios.post("http://localhost:8080/api/board/save", {
        title: title,
        author: author,
        content: content
      });
      alert(response.data);
      navigate("/board/list");
    } catch (error) {
      console.error("통신 에러 발생:", error);
    }
  }

  return (<>
    <BoardFormView onChange={handleChange} title={title} author={author} content={content}
      onSave={handleSave} />
  </>)
}
export default BoardFormCon;