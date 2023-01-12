import React from 'react';
import styled from 'styled-components';

const HeaderList = styled.div`
	border: 1px solid black;
	height: 100px;
`;
// 하나의 컴포넌트를 생성(재사용)
const Header = () => {
	return (
		<HeaderList>
			<ul>
				<li>메뉴 1</li>
				<li>메뉴 2</li>
			</ul>
		</HeaderList>
	);
};

export default Header;
