
export type ButtonsProps = {
    count: number
    increment: () => void
    reset: () => void
}

export const Buttons = ({count, increment, reset}: ButtonsProps) => {

    const incrementDisable = count === 5
    const resetDisable = count === 0

    return (
        <div className={'buttons-container'}>
            <button disabled={incrementDisable} onClick={increment}>+</button>
            <button disabled={resetDisable} onClick={reset}>Reset</button>
        </div>
    )

}