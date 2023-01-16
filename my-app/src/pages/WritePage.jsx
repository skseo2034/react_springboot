import React, { useRef, useState } from 'react';

const WritePage = () => {
	const [value, setValue] = useState('');
	const handleWrite = () => {
		//ListPage의 setPosts에 무엇을 담아야 함?
		let post = { id: 6, title: value };
		setPosts(post);
	};
	return (
		<div>
			<h1>글쓰기페이지</h1>
			<form>
				<input
					type="text"
					placeholder="제목을 입력하세요"
					onChange={(e) => {
						setValue(e.currentTarget.value);
					}}
				/>
				<button type="button" onClick={handleWrite}>
					글쓰기
				</button>
			</form>
		</div>
	);
};

export default WritePage;
