function BoardDetailView({ oneList, deleteOnePost, onUpdate }) {


    return (<>
        {oneList ? (
            <div>
                 <p>제목 : {oneList.title}</p>
                 <p>작성자 : {oneList.author}</p>
                <p>내용 : {oneList.content}</p>
                <button onClick={deleteOnePost}>삭제</button>
                <button onClick={onUpdate}>수정</button>
            </div>
        ) : (
            <div>
                <p>게시글이 존재하지 않습니다</p>
            </div>
        )}
    </>);
}
export default BoardDetailView;