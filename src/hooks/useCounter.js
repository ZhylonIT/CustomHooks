import { useState } from "react"

export const useCounter = (initialValue = 0) => {

    const [Counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        setCounter(Counter + value)
    }
    
    const reset = () => {
        setCounter(initialValue)
    }

    const decrement = (value = 1, allowNegative = true) => {
        if (!allowNegative && Counter - value < 0) {
            setCounter(0)
        } else {
            setCounter(Counter - value)
        }
    }
    
  return {
    Counter,
    increment,
    reset,
    decrement    
  }
}
