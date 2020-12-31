import React, { useState } from "react";

function UseState() {
    let initialCount = 10;
    const [count,setCount] = useState(initialCount);
    
    console.log(count,'值');

    return (
        <>
            当前数字: {count}
            <button onClick={() => setCount(initialCount)}>重置</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount +1)}>+</button>
        </>
    );
};

export default UseState;