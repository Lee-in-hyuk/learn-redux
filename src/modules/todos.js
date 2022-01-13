import React from 'react';

// 액션타입 선언
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
let nextId = 0;

// 액션 생성 함수
export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text,
        done: false
    }
})
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})
export const deleteTodo = id => ({
    type: DELETE_TODO,
    id
})

// 초기상태 지정
// // 원래는 이런 형태로 넣겠다는걸 보여주려고 작성, 지금은 빈배열 넣을거임
const initialState = [
    // {
    //     id: 1,
    //     text: '예시',
    //     done: false
    // }
]

// 리듀서 만들기
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
            return state.concat(action.todo) // concat은 배열메서드
        case DELETE_TODO :
            return state.filter(todo=>todo.id !== action.id)
        default:
            return state;
    }
}
