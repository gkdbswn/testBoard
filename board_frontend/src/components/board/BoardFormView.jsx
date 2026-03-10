function BoardFormView({ onChange, title, author, content, onSave }) {

  return (<>
    제목<input type="text" name="title" value={title} onChange={onChange} />
    작성자<input type="text" name="author" value={author} onChange={onChange} />
    내용<input type="text" name="content" value={content} onChange={onChange} />
    <button onClick={onSave}>작성 완료</button>

  </>)
}
export default BoardFormView;