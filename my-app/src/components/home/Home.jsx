import React from 'react';
import styled from 'styled-components';

// 부모로 부터 받은 props 를 가지고 스타일링을 동적으로 할것이라면?
// 여기의 props 는 부모 부터 받은 Home function props 와 다른것이다.
// 이 props 는 <StyledDeleteButton>  엘리먼트에 있는 속성을 의미한다.
const StyledDeleteButton = styled.button`
	color: ${(props) => (props.user.username === 'sukyo' ? 'blue' : 'red')};
`;

// background-color 만 추가 된것이다. 이렇게 해도 되나.
// 상속받아서 사용할 수 잇다.
/*const StyledAddButton = styled.button`
	color: ${(props) => (props.user.username === 'sukyo' ? 'blue' : 'red')};
	background-color: green;
`;*/

// StyledDeleteButton 상속 받아서 정의 = 스타일 확장(extends)
const StyledAddButton = styled(StyledDeleteButton)`
	background-color: green;
`;

const Home = (props) => {
	// 구조분해 할당.
	const { boards, setBoards, number, add1Number, user } = props;

	return (
		<div>
			<h1>홈 : {number}</h1>
			<StyledAddButton user={user} onClick={add1Number}>
				1씩증가
			</StyledAddButton>
			<StyledDeleteButton user={user} onClick={() => setBoards([])}>
				전체삭제
			</StyledDeleteButton>
			{boards.map((boards) => (
				<h3 key={boards.id}>
					제목 : {boards.title} 내용: {boards.contents}
				</h3>
			))}
		</div>
	);
};

export default Home;
