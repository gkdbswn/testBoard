import { Link } from "react-router-dom";
import "../style/BoardListStyle.css";

function BoardListView({ list, totalPage, BoardList, checkElement, delChePost }) {
    return (<>

        <div className="board">
            <h2>게시글 목록</h2>
            <table className="board-table">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>내용</th>
                    </tr>
                </thead>
                <tbody>
                    {list && list.length > 0 ? (
                        list.map((li,index) => (
                            <tr key={`${li.id}-${index}`}>
                                <td>
                                    <input type="checkbox" onChange={(e)=>checkElement(e.target.checked, li.id)}/>
                                    <Link to={`/board/${li.id}`}>
                                        {li.title}
                                    </Link>
                                </td>
                                <td>{li.author}</td>
                                <td>{li.content}</td>
                            </tr>)
                        )
                    ) : (
                        <tr><td>게시글 없음</td></tr>
                    )}
                </tbody>
            </table>
        </div >
        <div>
            <Link to="/board/write">
                <button>글 쓰기</button>
            </Link>
            <button onClick={delChePost}>삭제</button>

            {Array.from({ length: totalPage }, (_, i) => (
                <button key={i} onClick={() => BoardList(i)}>{i + 1}</button>
            ))}

        </div>
    </>)
}
export default BoardListView;