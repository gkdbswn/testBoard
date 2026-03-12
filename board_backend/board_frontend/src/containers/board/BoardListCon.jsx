import { useEffect, useState } from "react";
import BoardListView from "../../components/board/BoardListView";
import axios from "axios";

function BoardListCon() {
    const [list, setList] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [selectedIds, setSelectedIds] = useState([]);

    //게시글 list 조회
    const BoardList = async (pageNum = 0) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/board/list?page=${pageNum}&size=5`);
            setList(response.data.content);
            setTotalPage(response.data.totalPages);
        } catch (error) {
            console.error("조회 실패");
        }
    }

    //체크박스 id 수집
    const checkElement = (checked, id) => {
        if (checked) {
            setSelectedIds([...selectedIds, id]);
        } else {
            setSelectedIds(selectedIds.filter(el => el !== id));
        }
    }

    //체크 박스 id 삭제
    const delChePost = async () => {
        if (selectedIds.length === 0) {
            alert("삭제할 게시글을 체크해주세요");
            return;
        }
        if (window.confirm(`정말 삭제하시겠습니까 ?`)) {
            try {
                await axios.delete(`http://localhost:8080/api/board/delete-select`, {
                    data: { ids: selectedIds }
                });
                alert("삭제 성공");
                BoardList();
            } catch (error) {
                console.error("삭제 실패:" + error);
            }

        }
    }

    useEffect(() => {
        BoardList();
    }, []);

    return (<>
        <BoardListView list={list} totalPage={totalPage} BoardList={BoardList} checkElement={checkElement} delChePost={delChePost}/>
    </>)
}
export default BoardListCon;