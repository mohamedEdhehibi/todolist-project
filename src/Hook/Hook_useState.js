import React, { useState ,useEffect} from 'react'

const Hook_useState = () => {
    const [name, setName] = useState("Ahmed")
    const [age, setAge] = useState(20)
  const change=()=>{
      setAge(age + 1)
      setName( name+' '+'Ali')
  }
      useEffect(() => {
          alert(`hello this a message`)
      }, [name])
    return (
        <div>
            {/* here we use the getter to get the state value */}
            <h1>hello my name is {name}</h1>
            <h1>hello my age is {age}</h1>
            <button onClick={()=>{change()}}>Incriment</button>
       
        </div>
    );
}

export default Hook_useState