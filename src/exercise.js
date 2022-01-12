import { createStore } from 'redux';

//createStore는 스토어를 만들어주는 함수입니다.

// 01. 리덕스에서 관리할 상태 정의
const initialState = {
    counter:0,
    text:'',
    list:[]
}

// 02. 액션 타입 정의
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// 03. 액션 생성함수 정의 (보통 제일 앞글자를 소문자로 작성 - 커널작성법)
const increase = () => ({
    type: INCREASE
})
// 또는 이렇게 사용
// function increase(){
//     return {
//         type: "INCREASE"
//     }
// }
const decrease = () => ({
    type: DECREASE
})
const changeText = text => ({
    type: CHANGE_TEXT,
    text: text
})
const addToList = item => ({
    type: ADD_TO_LIST,
    item: item
})

// 04. 리듀서 작성
// state의 초기 상태가 필요함. state가 undefined면 초기상태를 만들어줘야 함.
function reducer(state=initialState,action){
    switch(action.type){
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1,
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1,
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text,
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            }
        default:
            return state;
    }
}

// 05. 스토어 생성
const store = createStore(reducer);
console.log(store.getState());

// 스토어 안에 들어있는 상태가 변경될 때마다 호출되는 listener함수
const listener = () => {
    const state = store.getState();
    console.log(state);
    console.log('<br/>여기')
}

// 06. 리스너 함수를 스토어에 구독
const unsubscribe = store.subscribe(listener);
// 구독 해제
// unsubscribe();

// 액션들을 디스패치 해보기
store.dispatch(increase());
store.dispatch(decrease());
unsubscribe(); // 구독해제하면 상태가 변경될 때마다 호출되던 함수(listener)가 멈춤
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({id:1, text: '하..'}));