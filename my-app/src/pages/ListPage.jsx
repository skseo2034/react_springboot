import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledItemBoxDiv = styled.div`
	display: flex;
	justify-content: space-between;
	border: 1px solid black;
	padding: 10px;
	height: 45px;
	margin: 20px;
	align-items: center;
`;

const ListPage = () => {
	let no = 6;
	const [post, setPost] = useState({
		id: no,
		title: '',
		content: '',
	});

	const [posts, setPosts] = useState([
		{ id: 1, title: '제목1', content: '내용1' },
		{ id: 2, title: '제목2', content: '내용2' },
		{ id: 3, title: '제목3', content: '내용3' },
		{ id: 4, title: '제목4', content: '내용4' },
		{ id: 5, title: '제목5', content: '내용5' },
	]);

	const handleWrite = (e) => {
		e.preventDefault(); // form 태그가 하려는 액션을 중지시켜야 함.
		//ListPage의 setPosts에 무엇을 담아야 함?
		//setPost({ id: 6, title: titleValue, content: contentValue });
		console.log(post.id, no);
		setPosts([...posts, post]);
		no = no + 1;
		setPost({ ...post, id: no });
	};

	const deleteContent = () => {
		//	console.log('deleteContent >>>>> ', id);
	};

	const handleForm = (e) => {
		console.log(e.target.name);
		console.log(e.target.value);

		// computed property names 문법(키값 동적할당)
		setPost({ ...post, [e.target.name]: e.target.value }); // 동적으로 값을 넣을 수 있다.
	};

	return (
		<div>
			<form onSubmit={handleWrite}>
				<input
					type="text"
					placeholder="제목을 입력하세요"
					value={post.title}
					onChange={handleForm}
					name="title"
				/>
				<input
					type="text"
					placeholder="내용을 입력하세요"
					value={post.content}
					onChange={handleForm}
					name="content"
				/>
				{/*<button type="button" onClick={handleWrite}>*/}
				<button type="submit">글쓰기</button>
			</form>
			{posts.map((post) => (
				<StyledItemBoxDiv key={post.id}>
					<div>
						번호 : {post.id} / 제목:{post.title} / 내용:{post.content}
					</div>
					<button onClick={deleteContent}>삭제</button>
				</StyledItemBoxDiv>
			))}
		</div>
	);
};

export default ListPage;
