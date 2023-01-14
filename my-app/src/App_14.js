import React from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App_14() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} /> {/*슬러시(/)가 있어서 exact 붙임*/}
				<Route path="/login" element={<LoginPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App_14;
