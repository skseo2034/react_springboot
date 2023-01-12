import React from 'react';
import styled from 'styled-components';

const FooterList = styled.div`
	border: 1px solid black;
	height: 100px;
`;
// 하나의 컴포넌트를 생성(재사용)
const Footer = () => {
	return (
		<FooterList>
			<ul>
				<li>오시는길: 서울 강남구...</li>
				<li>전화번호: 0202020</li>
			</ul>
		</FooterList>
	);
};

export default Footer;
