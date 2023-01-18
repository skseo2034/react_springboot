// 액션
import React from 'react';

export const increase = (username) => ({ type: 'INCREMENT', payload: username });
export const decrease = () => ({ type: 'DECREMENT' });

// 위의 함수가 있을때 아래 처럼
// <button onClick={dispatcher(increase())}>증가</button>
// 없다면 아래처럼
//<button onClick={dispatcher({type: 'INCREMENT'})}>증가</button>

// 상태
const initstate = {
	username: 'ssar',
	number: 1,
};

// 액션의 결과를 걸러내는 친구
const reducer = (state = initstate, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { number: state.number + 1, username: action.payload }; // return 되면 그걸 호춯한 쪽에서 받는게 아니라 return 되는 순간 ui 변경
		case 'DECREMENT':
			return { number: state.number - 1 };
		default:
			return state;
	}
};

export default reducer;
