import React from 'react';

// 01. 액션 타입 만들기
// 다른 모듈과 중복되지 않게 접두사 counter/ 를 붙임
const SET_DIFF = "couter/SET_DIFF"
const INCREASE = "couter/INCREASE"
const DECREASE = "couter/DECREASE"

// 02. 액션 생성 함수 만들기
export const setDiff = diff => ({type: SET_DIFF, diff});
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

// 03. 초기 상태 선언
const initialState = {
    number: 0,
    diff: 1 // 증가,감소 값을 지정. - 1씩 커지거나 감소하게
}

// 04. counter라는 리듀서 선언
export default function counter(state=initialState, action) {
    switch ( action.type ){
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            }
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff
            }
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff
            }
        default:
            return state;
    }
}
