import axios from "axios";
import BoardUpdateView from "../../components/board/BoardUpdateView";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BoardUpdateCon() {
    const navigate = useNavigate();
    const [updateData, setUpdateData] = useState({ title: "", content: "" });
    const { id } = useParams();


    const getDetail = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/board/${id}`);
            setUpdateData(res.data);
        } catch (error) {
            console.log("데이터 로드 실패" + error);
        }
    };

    const onUpdate = async () => {
        if(!updateData?.title?.trim()){
            alert("제목을 입력해주세요");
            return;
        }
        if(!updateData?.content?.trim()){
            alert("내용을 입력해주세요");
            return;
        }
        try {
            const response = await axios.put(`http://localhost:8080/api/board/update/${id}`,
                updateData
            );
            setUpdateData(response.data);
            alert("수정 완료");
            navigate(`/board/${id}`);
        } catch (error) {
            alert("수정 실패 :" + error);
        }
    }

    useEffect(() => {
        getDetail();
    }, [id]);

    return (<>
        <BoardUpdateView updateData={updateData} onUpdate={onUpdate} setUpdateData={setUpdateData} />
    </>)
}
export default BoardUpdateCon;