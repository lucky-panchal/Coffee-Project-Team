import React, { useState, useEffect } from 'react'

const Filter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count > 0) {
            console.log("Count increased to: ", count)
        } else if (count === 0) {
            console.log("Count reset to: ", count)
        }
    }, [count])

    const handleIncrease = () => {
        setCount(count + 1)
    }

    const handleDecrease = () => {
        setCount(count > 0 ? count - 1 : 0)
    }

    return (
        <>

            <button onClick={handleIncrease}>+</button>
            <h1>Count: {count}</h1>
            <button onClick={handleDecrease}>-</button>
        </>
    )
}
export default Filter