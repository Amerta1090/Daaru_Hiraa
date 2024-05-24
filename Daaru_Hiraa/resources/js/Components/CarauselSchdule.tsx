import { ClockIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type Props = {
    slides: any;
    auto: boolean;
    slideInterval?: number;
};

const CarauselSchdule = (props: Props) => {
    const { slides, auto, slideInterval } = props;
    const [current, setCurrent] = useState<number>(0);

    const prev = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };
    const next = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    return (
        <div className="relative mb-5">
            <div className="flex gap-5  px-2 overflow-hidden w-[106rem] items-center justify-start ">
                {/* JADWAL CONTETNT */}

                <div
                    className="flex  gap-5 transition-transform ease-out duration-300"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slides.map((slide: any, index: number) => (
                        <div
                            className="h-36 rounded-xl border-2 flex flex-col w-[20rem] overflow-hidden"
                            key={index}
                        >
                            {/* JUDUL */}
                            <div className="flex items-center justify-start px-3 py-2 bg-primary">
                                <h1 className="text-white font-bold text-xl">
                                    {slide.title}
                                </h1>
                            </div>
                            {/* END JUDUL */}
                            <div className="grow bg-white rounded-b-xl p-5 grid gap-3 ">
                                <div className="flex justify-between items-end">
                                    {/* CLOCK */}
                                    <span className="flex text-black gap-2">
                                        <ClockIcon className="w-5" />
                                        <small className="">{slide.time}</small>
                                    </span>
                                    {/* PEMATERI */}
                                    <span className="flex gap-2">
                                        <UsersIcon className="w-5" />
                                        <small>{slide.mentor}</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* END JADWAL CONTETNT */}
            </div>
            <div className="flex gap-2 absolute -bottom-6 left-[50%] items-center justify-center">
                {slides.map((_: any, index: number) => (
                    <button
                        className={`w-2 h-2 rounded-full bg-primary ${
                            current === index
                                ? "opacity-100 w-3 h-3"
                                : "opacity-50"
                        }`}
                        key={index}
                        onClick={index % 2 === 0 ? next : prev}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default CarauselSchdule;
