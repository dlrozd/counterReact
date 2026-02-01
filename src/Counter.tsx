import type {ButtonsProps} from "./Buttons.tsx";

type CounterProps = {
    count: ButtonsProps['count']
}

export const Counter = (props: CounterProps) => {

    const counterClassName = props.count === 5 ? 'counter max-value' : 'counter';

    return (

        <div className={'counter-container'}>
            <div className={counterClassName}>
                {'Count: '}
                {props.count}
            </div>
        </div>
    )
}
