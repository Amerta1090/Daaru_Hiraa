import React, { useEffect, useState } from "react";

type Props = {
    // iconComponent?: React.ReactNode;
    initialValue: number;
    targetValue: number;
    text?: string;
};

const NumberCount = (props: Props) => {
    const { initialValue, targetValue, text } = props;

    const [count, setCount] = useState(initialValue);
    const duration = 1000; // 4 seconds

    useEffect(() => {
        let startValue = initialValue;
        const interval = Math.floor(duration / (targetValue - initialValue));

        const counter = setInterval(() => {
            startValue += 1;
            setCount(startValue);
            if (startValue >= targetValue) {
                clearInterval(counter);
            }
        }, interval);

        return () => {
            clearInterval(counter);
        };
    }, [targetValue, initialValue]);

    return (
        <div className="flex gap-1">
            {/* <div className="icon">{iconComponent}</div> */}
            <span className="num">{count}</span>
            <span className="text">{text}</span>
        </div>
    );
};

export default NumberCount;
