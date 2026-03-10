
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardFormCon from './containers/board/BoardFormCon';
import BoardListCon from './containers/board/BoardListCon';
import BoardDetailCon from './containers/board/BoardDetailCon';
import BoardUpdateCon from './containers/board/BoardUpdateCon';

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/board">
          <Route path="write" element={<BoardFormCon />} />
          <Route path="list" element={<BoardListCon />} />

          <Route path="update/:id" element={<BoardUpdateCon />} />
          <Route path=":id" element={<BoardDetailCon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>


  );
}

export default App;
