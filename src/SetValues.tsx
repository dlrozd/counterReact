
// export type SetValuesProps = {
//     max: number,
//     start: number
// }

export const SetValues = () => {
    return (

        <div className={'counter-set'}>
            <div className={'set-values'}>
                <div className={'set-max-value'}>
                    max value:
                    <input className={'max-input'} type={'number'} value={5}/>
                </div>
                <div className={'set-start-value'}>
                    start value:
                    <input className={'start-input'} type={'number'} value={5}/>
                </div>
            </div>
            <div className={'set-button'}>
                <button>Set</button>
            </div>
        </div>
    )
}
