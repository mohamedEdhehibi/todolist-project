import React from 'react'
import { useState } from 'react'

const CustomHook = (varinitial,step) => {
    const [count, setcount] = useState(varinitial)

    const incriment = () => {
        setcount(count + step)
    }
    const decriment = () => {
        setcount(count - step)
    }
    const reset = () => {
        setcount(0)
    }
  return (
      [count,incriment,decriment,reset]
  )
}

export default CustomHook