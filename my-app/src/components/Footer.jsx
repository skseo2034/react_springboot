import React from 'react';
import styled from 'styled-components';

const StyledFooterDiv = styled.div`
	border: 1px solid black;
	height: 100px;
`;
// 하나의 컴포넌트를 생성(재사용)
const Footer = () => {
	return (
		<StyledFooterDiv>
			<ul>
				<li>오시는길: 서울 강남구...</li>
				<li>전화번호: 0202020</li>
			</ul>
		</StyledFooterDiv>
	);
};

export default Footer;
