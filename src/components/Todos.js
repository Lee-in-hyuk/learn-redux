// 프레젠테이셔널 컴포넌트 + 컨테이너 컴포넌트

import React from 'react';
import { useState } from 'react';

function Todo({ todos, onCreate, onToggle, onDelete }) {
    // 인풋에 입력되는 값을 관리하는 상태
    const [ text, setText ] = useState("");
    // 인풋의 입력값이 변경될 때 실행하는 함수
    const onChange = e => {
        setText(e.target.value);
        console.log(e.target.value);
    }
    const onSubmit = e => {
        e.preventDefault(); // submit 이벤트가 발생했을 때 새로고침 방지(기본 이벤트를 제거)
        onCreate(text); // submit이 발생했을 때 onCreate함수가 실행되게.
        setText(''); // input.value 초기화
    }
    console.log(todos);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} placeholder='할 일을 입력하세요.'/>
                <button type='submit'>등록</button>
            </form>
            <ul>
                {   // style에 첫번째 중괄호는 자바스크립트를 쓰기 위해 작성, 두번째 중괄호는 객체형태를 쓰기 위해 작성
                    // 삼항연산자 써서 todo.done이 true일 때 해당 스타일을 넣고, false일 때 none을 넣겠다.
                    todos.map(todo=><li style={{ textDecoration: todo.done ? 'line-through' : 'none', cursor:'pointer'}}
                        key={todo.id} onClick={()=>{onToggle(todo.id)}}>{todo.text}
                        <button style={{ outline:'none', border:'none',background:'#fff', paddingLeft:'30px'}} onClick={()=>{onDelete(todo.id)}}>❌</button>
                        </li>)
                }
            </ul>
        </div>
    );
}

export default Todo;