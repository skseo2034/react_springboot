import React, { createRef, useEffect, useMemo, useRef, useState } from 'react';

// useRef (디자인)
// dom 을 변경할때 사용
function App_9() {
	const myRef = useRef(null);

	const [list, setList] = useState([
		{ id: 1, name: '길동' },
		{ id: 2, name: '꺽정' },
	]);

	const myRefs = Array.from({ length: list.length }).map(() => createRef());

	return (
		<>
			<button
				onClick={() => {
					myRef.current.style.backgroundColor = 'red';
					myRefs[0].current.style.backgroundColor = 'red';
					console.log(myRefs[0].current.innerHTML);
				}}
			>
				색 변경
			</button>
			<div ref={myRef}>박스</div>
			{list.map((a, index) => (
				<h1 ref={myRefs[index]} key={a.id}>
					{a.name}
				</h1>
			))}
		</>
	);
}

export default App_9;
