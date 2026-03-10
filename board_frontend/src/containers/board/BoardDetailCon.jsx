import React, { useEffect, useState } from "react";
import BoardDetailView from "../../components/board/BoardDetailView";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function BoardDetailCon() {
    const [oneList, setOneList] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const getOneList = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/board/${id}`);
            setOneList(response.data);
        } catch (error) {
            console.log("불러오기 실패 : " + error);
        }
    };

    const deleteOnePost = async () => {
        if (window.confirm("삭제하시겠습니까?")) {
            try {
                const response = await axios.delete(`http://localhost:8080/api/board/${id}`);
                alert("삭제 되었습니다");
                navigate("/board/list");

            } catch (error) {
                console.log("삭제 실패 : " + error);
            }
        }
    };

    const onUpdate = () => {
        navigate(`/board/update/${id}`);
    }

    useEffect(() => {
        getOneList();
    }, [id]);


    return (<>
        <BoardDetailView oneList={oneList} deleteOnePost = {deleteOnePost} onUpdate={onUpdate}/>
    </>)
}
export default BoardDetailCon;