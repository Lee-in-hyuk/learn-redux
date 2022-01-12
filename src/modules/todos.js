import React from 'react';

// 액션타입 선언
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
let nextId = 1;

// 액션 생성 함수
export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text
    }
})
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

// 초기상태 지정
const initialState = [
    // 이런 형태로 넣겠다는걸 보여주려고 작성, 지금은 빈배열 넣을거임
    // {
    //     id: 1,
    //     text: '예시',
    //     done: false
    // }
]

export default function todos(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_TODO:
            return state.map(
                todo=>
                todo.id === action.id // id가 일치하느냐?
                ? { ...todo, done: !todo.done }
                : todo // 아닐 때는 값을 그대로 둠
            )
        case ADD_TODO :
            return state.concat(action.todo)
        default:
            return state;
    }
}
