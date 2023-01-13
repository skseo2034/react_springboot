import React from 'react';

const Home = (props) => {
	// 구조분해 할당.
	const { boards, setBoards, number, add1Number } = props;
	return (
		<div>
			<h1>홈 : {number}</h1>
			<button onClick={add1Number}>1씩증가</button>
			<button onClick={() => setBoards([])}>전체삭제</button>
			{boards.map((boards) => (
				<h3 key={boards.id}>
					제목 : {boards.title} 내용: {boards.contents}
				</h3>
			))}
		</div>
	);
};

export default Home;
