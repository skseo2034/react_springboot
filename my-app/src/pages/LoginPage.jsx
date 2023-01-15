import React from 'react';
import Login from '../components/login/Login';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const LoginPages = () => {
	const { id } = useParams(); // const id = useParams().id; 도 가능
	const navigate = useNavigate();
	console.log('LoginPages.jsx useParams', id);
	return (
		<>
			<button
				onClick={() => {
					navigate(-1);
				}}
			>
				뒤로가기
			</button>
			<Login />
		</>
	);
};

export default LoginPages;
