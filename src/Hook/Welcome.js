import React, { useState } from 'react'

const Welcome = props => {
    console.log(props.name);
    const [bgColor, setBgColor] = useState(props.name === 'ned stark'? 'white' : 'black')
        
    console.log(bgColor);

    return (
        <h1 style={{ backgroundColor: bgColor  }} >{props.name}</h1>
    )
}

export default Welcome