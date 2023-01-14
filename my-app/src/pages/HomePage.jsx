import React, { useEffect, useState } from 'react';
import Home from '../components/home/Home';

function HomePage(props) {
	// http 요청( fetch, axios(다운)) // jquery ajax 사용권장 안함.
	// 컴포넌트 에서 요청을 하지 말고 page 에서 해라.
	// 컴포넌트는 재상용 됨으로. 필요없는 요청이 발생 할 수 있다.
	// 임의로 받았다 치고
	const [boards, setBoards] = useState([]);
	const [number, setNumber] = useState(0);
	const [user, setUser] = useState({});

	const add1Number = () => {
		setNumber(number + 1);
	};

	// 빈 배열이면 최초에 한번만 실행 된다.
	useEffect(() => {
		console.log('HomePage useEffect', boards);
		// 다운로드 가정 = fetch(), axios(), ajax() 비동기시행
		let datas = [
			{ id: 1, title: '제목1', contents: '내용1' },
			{ id: 2, title: '제목2', contents: '내용2' },
			{ id: 3, title: '제목3', contents: '내용3' },
		];

		// 위가 다운로드 코드라고 가정할대 비동기 이므로 빈데이터가 들어간다.
		// 빈값으로 <Home /> 그려졌다가.
		// 데이터가 들어가면 상태값이으로 다시 <Home /> 이 그려진다.
		// 그래서 무조건 상태갓이여야 한다.
		setBoards([...datas]);
		setUser({ id: 1, username: 'sukyo' });
	}, []);

	return (
		<div>
			<Home boards={boards} setBoards={setBoards} number={number} add1Number={add1Number} user={user} />
		</div>
	);
}

export default HomePage;
