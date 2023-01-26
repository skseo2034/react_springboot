import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { nativeTouchData } from 'react-dom/test-utils';

const Detail = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [book, setBook] = useState({
		id: '',
		title: '',
		author: '',
	});

	const getBook = async () => {
		const response = await fetch('http://localhost:8080/book/' + id).then(res => res.json());
		return response;
	};

	useEffect(() => {
		getBook().then(res => {
			console.log('aaa', res);
			setBook(res);
		});
	}, []);

	/*const deleteBook = id => {*/
	const deleteBook = () => {
		fetch('http://localhost:8080/book/' + id, {
			method: 'DELETE',
		})
			.then(res => res.text())
			.then(res => {
				if (res === 'ok') {
					navigate('/');
				} else {
					alert('삭제실패!!!');
				}
			});
	};

	const updateBook = () => {
		navigate('/updateForm/' + id);
	};

	return (
		<div>
			<h1>책 상세보기</h1>
			<Button variant="warning" onClick={updateBook}>
				수정
			</Button>{' '}
			{/*<Button variant="danger" onClick={() => deleteBook(book.id)}>*/}
			<Button variant="danger" onClick={deleteBook}>
				삭제
			</Button>
			<hr />
			<h3>{book.author}</h3>
			<h1>{book.title}</h1>
		</div>
	);
};

export default Detail;
