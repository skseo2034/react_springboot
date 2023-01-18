import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Top from './components/Top';
import Bottom from './components/Bottom';

// 글쓰기, 글삭제, 글목록보기
const App_18 = () => {
	return (
		<div className="container">
			<h1>최상단 화면</h1>
			<Top />
			<Bottom />
		</div>
	);
};

export default App_18;
