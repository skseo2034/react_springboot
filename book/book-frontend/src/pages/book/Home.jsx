import React, { useEffect, useState } from 'react';
import BookItem from '../../components/BookItem';

const Home = () => {
	const [books, setBooks] = useState([]);

	// 함수 실행시 최초 한번 실행되는것.
	/*useEffect(() => {
		fetch('http://localhost:8080/book')
			.then(res => res.json())
			.then(res => {
				console.log(res);
				setBooks(res);
			}); // 비동기 함수
	}, []);*/

	const initialDataSave = async () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
		};
		const response = await fetch('http://localhost:8080/book/initialData', requestOptions).then();
		return response;
	};

	const getBookList = async () => {
		const response = await fetch('http://localhost:8080/book').then(res => res.json());
		return response;
	};
	useEffect(() => {
		/*initialDataSave().then(r => {
			console.log(r);
		});*/

		getBookList().then(res => {
			console.log('aaa', res);
			setBooks(res);
		});
	}, []);

	return (
		<div>
			{books.map(book => (
				<BookItem key={book.id} book={book} />
			))}
		</div>
	);
};

export default Home;
