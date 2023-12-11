import React, { useState } from 'react'
import CustomHook from './CustomHook'

const CountTow = () => {
   const [count, incriment, decriment, reset] = CustomHook(3,2) 
    return (
        <>
            <h1>Count Tow - {count}</h1>
            <button onClick={incriment}>Incriment</button>
            <button onClick={decriment}>decriment</button>
            <button onClick={reset}>reset</button>
        </>
    )
}

export default CountTow