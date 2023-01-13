import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Sub from './Sub';

// return 시 하나의 Dom 만 리턴 할 수 있다.
// 변수 선언은 lef 또는 const 로만 해야 한다.
// jsx 안에는 if 사용할 수 없다. 삼항연산자를 사용할 수 있다.
// 조건부 랜더링 ( 조건 && 값(true) : 조건이 true 일때 만 나온다.
// css 디자인 방법
// 	- 내부에 적는방법
//	- 외부파일에 적는방법
//	- 라이브러리 사용 (부트스트랩, component-styled)

let a = 10; // 변수
const b = 20; // 상수

function App() {
	// let number = 1; // 상태값 아님
	/*const [number, setNumber] = useState(1); // React안에 hooks 라이브러리 상태값이 됨.
	const add = () => {
		setNumber(number + 1); // 리액트한테 number 값 변경할께 라고 요청.
		console.log('add', number);
	};*/

	console.log('실행됨');
	let sample = [
		{ id: 1, name: '홍길동1' },
		{ id: 2, name: '홍길동2' },
		{ id: 3, name: '홍길동3' },
		{ id: 4, name: '홍길동4' },
	];
	// 다운로드 받음 (사용자 정보들)
	const [users, setUsers] = useState(sample); // 레퍼런스 변경이 되어야 동작.
	const [num, setNum] = useState(5);

	const download = () => {
		// 기존 데이터 세팅
		//sample.push({ id: 5, name: '홍길동45' });
		//console.log(sample);
		//setUsers(sample); // sample 는 변경이 되나. 레퍼런스 동일 하여 다시 안그림.
		// setUsers(...sample); // 레퍼런스 다름 다시 그림.

		// const b = sample.concat({ id: 5, name: '홍길동45' });
		// setUsers(b); // 레퍼런스가 달라서 실행 됨. 한번 실행후 downlaod 버튼 눌러도 재 실행 되나 추가안됨.동일데이터 추가이고 불변이기 때문.

		setUsers([...sample, { id: num, name: '홍길동5' }]);
		setNum(num + 1);
	};

	// 랜더링시점 = 상태값 변경
	return (
		<>
			<div>
				{/*<h1>숫자 : {number}</h1>
				<button onClick={add}>더하기</button>
				<Sub />*/}
				<button onClick={download}>다운로드</button>
				{users.map(u => (
					<h1 key={u.id}>
						{u.id}, {u.name}
					</h1>
				))}
			</div>
		</>
	);
}

export default App;
