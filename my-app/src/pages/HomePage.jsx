import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/home/Home';

function HomePage(props) {
	return (
		<div>
			<Header />
			<Home />
			<Footer />
		</div>
	);
}

export default HomePage;
