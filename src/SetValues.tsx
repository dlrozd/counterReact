import {Button, ConfigProvider, Input} from 'antd';
import {createStyles} from 'antd-style';
import { NumberOutlined  } from '@ant-design/icons';


type ValuesType = {
    startValue: number;
    maxValue: number;
}

type SetValuesPropsType = {
    values: ValuesType;
    onChange: (field: 'startValue' | 'maxValue', value: number) => void;
    onSet: () => void;
    isSetDisabled: boolean;
    isError: boolean;
}

export const SetValues = ({values, onChange, onSet, isSetDisabled, isError}: SetValuesPropsType) => {


    const inputClass = isError ? 'input-error' : '';

    const useStyle = createStyles(({prefixCls, css}) => ({
        linearGradientButton: css`
            &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
                > span {
                    position: relative;
                }

                &::before {
                    content: '';
                    background: linear-gradient(135deg, #6253e1, #04befe);
                    position: absolute;
                    inset: -1px;
                    opacity: 1;
                    transition: all 0.3s;
                    border-radius: inherit;
                }

                &:hover::before {
                    opacity: 0;
                }
            }
        `,
    }));

    const {styles} = useStyle();

    return (
        <ConfigProvider
            button={{className: styles.linearGradientButton}}
        >
            <div className="counter-set">
                <div className="set-values">
                    <div>
                        <span>max value:</span>
                        <Input
                            size="large"
                            placeholder="large size"
                            prefix={<NumberOutlined />}
                            value={values.maxValue}
                            onChange={(e) => onChange('maxValue',  Number(e.target.value))}
                            className={inputClass}
                        />
                    </div>
                    <div>
                        <span>start value:</span>
                        <Input
                            size="large"
                            placeholder="large size"
                            prefix={<NumberOutlined />}
                            value={values.startValue}
                            onChange={(e) => onChange('startValue', Number(e.target.value))}
                            className={inputClass}
                        />
                    </div>
                </div>
                <div className="set-button-container">
                    {/* 4. Раскомментируйте и используйте Button из antd */}
                    <Button
                        size="large"
                        type="primary"
                        onClick={onSet}
                        disabled={isSetDisabled || isError}
                    >
                        set
                    </Button>
                </div>
            </div>
        </ConfigProvider>
    );
};