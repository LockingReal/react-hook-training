import React, { useState , createContext, useContext  } from 'react';
const CountContext = createContext();

function Counter(){
    const count = useContext(CountContext);
    return count;
}

function HookContext(){
    const [ count , setCount ] = useState(0);
    return (
        <>
        
            <div>
                <p>You clicked {count} times</p>
                <button onClick={()=>{setCount(count+1)}}>click me</button>
            </div>

            <CountContext.Provider value={count}>
                <Counter></Counter>
            </CountContext.Provider>
        
        </>
    )
}

export default HookContext;