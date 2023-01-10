import React, { useEffect, useMemo, useState } from 'react';

// useMemo => 메모라이제이션(Memorization)(기억)
function App_8() {
	const [list, setList] = useState([1, 2, 3, 4]);
	const [str, setStr] = useState('합계');

	const addResult = useMemo(() => getAddResult(), [list]);

	const getAddResult = () => {
		let sum = 0;
		// list.forEach(i => (sum = sum + 1));
		list.map(i => (sum = sum + i));
		console.log('sum', sum);
		return sum;
	};

	return (
		<>
			<button
				onClick={() => {
					setStr('안녕');
				}}
			>
				문자변경
			</button>
			<button
				onClick={() => {
					setList([...list, 10]);
				}}
			>
				리스트 값 추가
			</button>
			<div>
				{list.map(i => (
					<h1 key={i}>{i}</h1>
				))}
			</div>
			<div>
				{str} : {addResult}
			</div>
		</>
	);
}

export default App_8;
