// 리덕스 스토어에 직접적으로 접근하지 않고 필요한 값은 props로 받아와서 사용

import React from 'react';

function Counter({onSetDiff, number, diff, onIncrease, onDecrease}) {
    const onChange = e => {
        onSetDiff(parseInt(e.target.value)); // input은 무조건 스트링 형태로 값이 담기기 때문에 parseInt로 숫자형태로 변환
    }
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} min="1" onChange={onChange} />
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default Counter;