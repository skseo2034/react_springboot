import React, { createRef, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

const t = document.createElement('div');
t.style = {
	fontSize: '1.5em',
	textAlign: 'center',
	color: 'palevioletred',
};

const Title = styled.span`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;
// useRef (디자인)
// dom 을 변경할때 사용
function App_10() {
	return (
		<>
			<div>
				<Title>안녕</Title>
			</div>
			<div style={t}>헬로</div>
		</>
	);
}

export default App_10;
