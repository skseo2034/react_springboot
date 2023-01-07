import logo from './logo.svg';
import './App.css';

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
	let b = 20;

	const myStyle = {
		color: 'red',
	};
	return (
		<>
			<div
				/*style={{
					color: 'red',
				}}*/
				style={myStyle}
			>
				안녕{a === 10 ? ' 10입니다' : ' 10이 아닙니다'}
			</div>
			<h1 className="box-style">해딩태그{b === 20 && ' 20입니다'}</h1>
		</>
	);
}

export default App;
