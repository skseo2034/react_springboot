import React, { useEffect, useState } from 'react';

function App_7() {
	const [data, setData] = useState(0);
	const [search, setSearch] = useState(0);

	const download = () => {
		// 다운로드 받고(통신)
		let downloadData = 5; // 가정한 데잍터
		setData(downloadData);
	};
	// 실행시점:
	// 1. App() 합수가 최초 실행 될때(마운트 될때), 즉 App() 그림이 그려질때
	// 2. 상태변수가 변경 될때 (그게 dependencyList 에 등록 되어 있어야 한다.)
	// 3. 의존리스트 관리를 할 수 있다.
	useEffect(() => {
		console.log('App useEffect 실행됨');
		download();
	}, [search]);

	return (
		<>
			<div>
				<button
					onClick={() => {
						setSearch(2);
					}}
				>
					검색하기
				</button>
				<h1>데이터: {data}</h1>
				<button
					onClick={() => {
						setData(data + 1);
					}}
				>
					더하기
				</button>
			</div>
		</>
	);
}

export default App_7;
