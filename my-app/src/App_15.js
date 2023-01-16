import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';
import Navigation from './components/Navigation';

// 글쓰기, 글삭제, 글목록보기
const App_15 = () => {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<ListPage />} /> {/*슬러시(/)가 있어서 exact 붙임*/}
				<Route path="/write" element={<WritePage />} />
				{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
				{/*<Route path="*" element={<NotFound />}></Route>*/}
				<Route path="*" element={<div>일치하는 페이지가 없습니다.</div>} />
			</Routes>
		</>
	);
};

export default App_15;
