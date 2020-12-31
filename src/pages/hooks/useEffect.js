import React, { useState, useEffect } from "react";

function UseEffect() {
    let initialCount = 0;
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log("执行了");
        document.title = `You clicked ${count} times`;
    }, [])

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}></button>
        </div>
    );
};

export default UseEffect;