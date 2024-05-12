import { FC } from "react";
import NumberCount from "./NumberCount";

interface Props {
    strokeWidth?: number;
    sqSize?: number;
    percentage: number;
}

const Progressbar: FC<Props> = (props) => {
    const { strokeWidth = 8, sqSize = 160, percentage } = props;

    const radius = (sqSize - strokeWidth) / 2;
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * (percentage || 0)) / 100;

    return (
        <>
            {percentage == 0 ? (
                "Tidak Ada Data"
            ) : (
                <div className="relative">
                    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
                        <circle
                            className="fill-none stroke-circleProgress"
                            cx={sqSize / 2}
                            cy={sqSize / 2}
                            r={radius}
                            strokeWidth={`${strokeWidth}px`}
                        />
                        <circle
                            className="fill-none stroke-textTidakHadir transition-all ease-in delay-200"
                            cx={sqSize / 2}
                            cy={sqSize / 2}
                            r={radius}
                            strokeLinecap="round"
                            strokeWidth={`${strokeWidth}px`}
                            transform={`rotate(-90 ${sqSize / 2} ${
                                sqSize / 2
                            })`}
                            style={{
                                strokeDasharray: dashArray,
                                strokeDashoffset: dashOffset,
                            }}
                        />
                    </svg>
                    <span className="absolute flex items-center justify-center w-full h-10 top-[60px]">
                        <p className="text-white text-3xl font-bold ">
                            <NumberCount
                                initialValue={0}
                                targetValue={percentage}
                                text="%"
                            />
                        </p>
                    </span>
                </div>
            )}
        </>
    );
};

export default Progressbar;
