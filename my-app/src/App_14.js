import React from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App_14() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} /> {/*슬러시(/)가 있어서 exact 붙임*/}
				<Route path="/login/:id" element={<LoginPage />} />
				{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
				{/*<Route path="*" element={<NotFound />}></Route>*/}
				<Route path="*" element={<div>일치하는 페이지가 없습니다.</div>} />
			</Routes>
			<Footer />
		</>
	);
}

export default App_14;
