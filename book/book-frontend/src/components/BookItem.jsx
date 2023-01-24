import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookItem = props => {
	const { id, title, author } = props.book;
	console.log('BookItem', id, title);
	return (
		<Card>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Link to={'/post/' + id} className="btn btn-primary">
					상세보기
				</Link>
			</Card.Body>
		</Card>
	);
};

export default BookItem;
