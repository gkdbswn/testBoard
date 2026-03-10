function BoardUpdateView({ updateData, setUpdateData, onUpdate }) {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdateData({
            ...updateData,
            [name]: value
        });
    };

    return (<>
        <h2>글 수정하기</h2>
        제목<input type="text" name="title" value={updateData.title} onChange={handleChange} /><br />
        내용<textarea type="text" name="content" value={updateData.content} onChange={handleChange} />
        <button onClick={onUpdate}>수정 완료</button>
    </>)
}
export default BoardUpdateView;