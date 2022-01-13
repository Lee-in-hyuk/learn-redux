// 리덕스 스토어 상태를 조회하거나 액션을 디스패치할 수 있는 컴포넌트

import React from 'react';
import Counter from '../components/Counter';
// 액션 생성함수 불러오기
import { increase, decrease, setDiff } from '../modules/counter'; // counter컴포넌트에 있는 액션 생성함수를 가지고 옴
import { useSelector, useDispatch } from 'react-redux'; // 

function CounterContainer() {
    // useSelector는 리덕스 스토어의 상태를 조회하는 hook
    const { number, diff } = useSelector(state=>({
        number: state.counter.number,
        diff: state.counter.diff
    }));

    // useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 hook
    const dispatch = useDispatch();

    // 각 액션을 디스패치 하는 함수
    // dispatch 안에 있는 함수들 = counter컴포넌트에 있는 액션 함수(객체형태로 type을 갖고 있음.)
    // dispatch는 리듀서를 실행시키는 역할인데, 액션을 갖고 있어야 해서 type을 갖고 있는 액션 함수를 가지고 온거.
    const onSetDiff = diff => dispatch(setDiff(diff));
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());

    return (
        <Counter
            // 상태
            number={number}
            diff={diff}
            // 액션을 디스패치하는 함수들
            onSetDiff={onSetDiff}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
        />
    );
}

export default CounterContainer;