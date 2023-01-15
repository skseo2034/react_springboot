import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const StyledHeaderDiv = styled.div`
	border: 1px solid black;
	height: 100px;
	background-color: ${(props) => props.backgroundColor};
`;

// 태그가 업는 것들은 상속해서 사용 하면 된다. => Link 를 import 해서 스타일 먹임.
const StyledHeadLink = styled(Link)`
	color: red;
`;

// 하나의 컴포넌트를 생성(재사용)
const Header = () => {
	return (
		<>
			<StyledHeaderDiv backgroundColor={'gray'}>
				<ul>
					<li>
						<StyledHeadLink to="/">메뉴 1: 홈으로 가기</StyledHeadLink>
					</li>
					<li>
						<StyledHeadLink to="/login/10">메뉴 2: login 페이지로 가기</StyledHeadLink>
					</li>
				</ul>
			</StyledHeaderDiv>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="me-auto">
						<Link to="/" className="nav-link">
							홈으로 가기
						</Link>
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<br />
			<Navbar bg="primary" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav>
				</Container>
			</Navbar>

			<br />
			<Navbar bg="light" variant="light">
				<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
