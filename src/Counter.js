import React from 'react'
import { useState,useMemo } from 'react'
function Counter() {
    const [count, setCount] = useState(0)
    const[number,setNumber] = useState([1,2,3,4,5,6,7,8,9,10])
    const sum=useMemo(()=>{
        console.log("calculating sum")
        return number.reduce((a,b)=>a+b)
    },[number])

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
      </div>
      <div>
        {sum}
      </div>
    </>
  )
}

export default Counter
