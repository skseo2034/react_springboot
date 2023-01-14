import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeaderDiv = styled.div`
	border: 1px solid black;
	height: 100px;
	background-color: ${(props) => props.backgroundColor};
`;
// 하나의 컴포넌트를 생성(재사용)
const Header = () => {
	return (
		<StyledHeaderDiv backgroundColor={'gray'}>
			<ul>
				<li>
					<Link to="/">메뉴 1: 홈으로 가기</Link>
				</li>
				<li>
					<Link to="/login">메뉴 2: login 페이지로 가기</Link>
				</li>
			</ul>
		</StyledHeaderDiv>
	);
};

export default Header;
