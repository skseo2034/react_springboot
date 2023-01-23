import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import UpdateForm from './pages/book/UpdateForm';
import Home from './pages/book/Home';
import SaveForm from './pages/book/SaveForm';
import LoginForm from './pages/user/LoginForm';
import JoinForm from './pages/user/JoinForm';
import Detail from './pages/book/Detail';

function App() {
	return (
		<div>
			<Header />
			<Container>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/saveForm" element={<SaveForm />} />
					<Route path="/book/:id" element={<Detail />} />
					<Route path="/loginForm" element={<LoginForm />} />
					<Route path="/joinForm" element={<JoinForm />} />
					<Route path="/updateForm/:id" element={<UpdateForm />} />
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					{/*<Route path="*" element={<NotFound />}></Route>*/}
					<Route path="*" element={<div>일치하는 페이지가 없습니다.</div>} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
