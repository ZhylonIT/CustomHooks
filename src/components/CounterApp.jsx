import { useCounter } from "../hooks/useCounter"

export const CounterApp = () => {

    const { Counter, increment, reset, decrement } = useCounter(0)

    return (
        <>
            <h1>Contador</h1>
            <h4>{Counter}</h4>
            <button className="btn btn-outline-primary" onClick={() => increment()}>+1</button>
            <button className="btn btn-outline-danger" onClick={() => reset()}>Reset</button>
            <button className="btn btn-outline-info" onClick={() => decrement()}>-1</button>

        </>

    )
}
