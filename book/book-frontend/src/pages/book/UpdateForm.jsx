import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateForm = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [book, setBook] = useState({
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

	const changeValue = e => {
		setBook({
			...book,
			[e.target.name]: e.target.value,
		});
	};

	const submitBook = e => {
		e.preventDefault(); // submit 이 action을 안타고 자기 할일을 그만함.
		fetch('http://localhost:8080/book/' + id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify(book),
		})
			.then(res => {
				console.log(1, res);
				if (res.status === 200) {
					return res.json();
				} else {
					return null;
				}
			})
			.then(res => {
				console.log(2, res);
				if (res !== null) {
					console.log(3, navigate);
					navigate('/book/' + id);
				} else {
					alert('책 수정에 실패 하였습니다.');
				}
			});
		/*.then(res => {
				navigate('/');
			})
			.catch(error => {
				console.log('save book error', error);
				alert('책 등록에 실패 하였습니다.');
			})*/
	};

	return (
		<Form onSubmit={submitBook}>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Title</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter Title"
					onChange={changeValue}
					name="title"
					value={book.title}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Author</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter Author"
					onChange={changeValue}
					name="author"
					value={book.author}
				/>
			</Form.Group>

			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default UpdateForm;
