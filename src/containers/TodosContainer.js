// 컨테이너 컴포넌트는 php에서 process가 했던 역할과 비슷함
import React from 'react';
import Todos from '../components/Todos';
// todos.js에 있는 액션 생성함수 불러오기
import { addTodo, toggleTodo } from '../modules/todos';
import { useSelector, useDispatch } from 'react-redux';

function TodoContainer() {
    // useSelector는 리덕스 스토어의 상태를 조회하는 hook
    // store의 todos값을 반환
    const todos = useSelector(state=>state.todos);

    // useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 hook
    const dispatch = useDispatch();

    // 각 액션을 디스패치 하는 함수
    // dispatch 안에 있는 함수들 = todos컴포넌트에 있는 액션 함수(객체형태로 type을 갖고 있음.)
    // dispatch는 리듀서를 실행시키는 역할인데, 액션을 갖고 있어야 해서 type을 갖고 있는 액션 함수를 가지고 온거.
    const onCreate = text => dispatch(addTodo(text));
    const onToggle = id => dispatch(toggleTodo(id));
    return (
        <Todos
            // 상태
            todos={todos}
            // 액션을 디스패치하는 함수들
            onCreate={onCreate}
            onToggle={onToggle}
        />
    );
}

export default TodoContainer;