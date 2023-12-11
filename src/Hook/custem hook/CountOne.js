import React, { useState, } from 'react'
import CustomHook from './CustomHook'
const CountOne = () => {
    const [count,incriment,decriment,reset]=CustomHook(5,3)
   
    
    return (
        <>
            <h1>Count One - {count}</h1>
            <button onClick={incriment}>Incriment</button>
            <button onClick={decriment}>decriment</button>
            <button onClick={reset}>reset</button>
        </>
    )
}

export default CountOne