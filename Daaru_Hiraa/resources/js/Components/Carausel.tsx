import {
    ArrowUpTrayIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

type Props = {
    slides: any;
    auto: boolean;
    slideInterval?: number;
    className: string;
    children?: any;
};

const Carausel = (props: Props) => {
    const { slides, auto = false, slideInterval = 3000, className } = props;
    const [current, setCurrent] = useState<number>(0);

    const prev = () => {
        setCurrent((current) =>
            current === 0 ? slides.data.length - 1 : current - 1
        );
    };

    const next = () => {
        setCurrent((current) =>
            current === slides.data.length - 1 ? 0 : current + 1
        );
    };

    useEffect(() => {
        if (!auto) return;
        const autoSlideInterval = setInterval(next, slideInterval);
        return () => clearInterval(autoSlideInterval);
    }, []);

    return (
        <div className={`overflow-hidden relative ${className}`}>
            {/* IMAGES */}
            <div
                className="flex transition-transform ease-out duration-300 "
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.data.map((slide: any, index: number) => (
                    <img src={slide.image} alt="" key={index} />
                ))}
            </div>
            {/* END IMAGES */}

            {/* BUTTONS */}
            <div className="inset-0 flex absolute justify-between items-center px-2">
                <button
                    className=" p-1 border bg-white opacity-50 rounded-full hover:opacity-100 flex items-center justify-center transition duration-300 ease-in-out"
                    onClick={prev}
                >
                    <ChevronLeftIcon className="w-5" />
                </button>
                <button
                    className=" p-1 border bg-white opacity-50 rounded-full hover:opacity-100 flex items-center justify-center transition duration-300 ease-in-out"
                    onClick={next}
                >
                    <ChevronRightIcon className="w-5" />
                </button>
            </div>
            {/* END BUTTONS */}

            {/* INDICATORS */}
            <div className="absolute bottom-2">
                <div className="flex gap-2 items-center justify-center">
                    {slides.data.map((_: any, index: number) => (
                        <span
                            className={`w-2 h-2 rounded-full bg-white ${
                                current === index
                                    ? "opacity-100 w-3 h-3"
                                    : "opacity-50"
                            }`}
                            key={index}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carausel;
