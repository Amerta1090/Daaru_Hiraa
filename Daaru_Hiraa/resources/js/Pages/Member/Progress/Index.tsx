import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useEffect, useState } from "react";
import { count } from "console";

const Progress = ({ auth }: PageProps) => {
    const [surahs, setSurahs] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchSurahs = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(
                    "https://quran-api.santrikoding.com/api/surah"
                );
                if (!response.ok) {
                    throw new Error(
                        `Failed to fetch surahs: ${response.statusText}`
                    );
                }
                const data = await response.json();
                setSurahs(data);
            } catch (error) {
                console.error("Error fetching surahs:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSurahs();
    }, []);

    return (
        <AuthenticatedLayout user={auth.user} title="Progress">
            <Head title="Progress" />

            <div className="mx-auto px-2">
                <div className="flex flex-wrap gap-7">
                    {/* LEFT CONTENT */}
                    <div className="w-[65%] flex flex-col gap-7">
                        {/* HEADER */}
                        <div className="bg-black shadow-xl sm:rounded-xl h-[300px]">
                            <div className="p-6 text-white">
                                You're logged in!
                            </div>
                        </div>
                        {/* END HEADER */}

                        {/* SURAH */}
                        <div className="w-full relative mb-10">
                            <div className="flex gap-5 overflow-y-auto w-full absolute py-5 -top-6">
                                {isLoading && (
                                    <div className="flex justify-center items-center w-full">
                                        <p className="text-center">
                                            Memuat Data...
                                        </p>
                                    </div>
                                )}
                                {surahs.map(
                                    (surah: any) => (
                                        console.log(surah),
                                        (
                                            <span
                                                className="px-3 py-2 rounded-xl border bg-gray-500 text-white text-center text-sm cursor-pointer text-nowrap"
                                                key={surah.id}
                                            >
                                                {surah.nama_latin}
                                            </span>
                                        )
                                    )
                                )}
                            </div>
                        </div>
                        {/* END SURAH */}

                        {/* INPUT SURAH */}
                        <div className="flex justify-center items-center">
                            <form className="w-1/2 bg-white rounded-xl px-10 py-5">
                                <div className="my-4    ">
                                    <InputLabel
                                        htmlFor="email"
                                        value="Mulai Surah"
                                    />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        // value={data.email}
                                        className="mt-1 block w-full shadow-xl"
                                        autoComplete="username"
                                        isFocused={true}
                                        // onChange={(e) =>
                                        //     setData("email", e.target.value)
                                        // }
                                    />

                                    <InputError
                                        // message={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="my-4">
                                    <InputLabel
                                        htmlFor="email"
                                        value="Mulai Surah"
                                    />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        // value={data.email}
                                        className="mt-1 block w-full shadow-xl"
                                        autoComplete="username"
                                        isFocused={true}
                                        // onChange={(e) =>
                                        //     setData("email", e.target.value)
                                        // }
                                    />

                                    <InputError
                                        // message={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="my-4    ">
                                    <InputLabel
                                        htmlFor="email"
                                        value="Akhir Ayat"
                                    />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        // value={data.email}
                                        className="mt-1 block w-full shadow-xl"
                                        autoComplete="username"
                                        isFocused={true}
                                        // onChange={(e) =>
                                        //     setData("email", e.target.value)
                                        // }
                                    />

                                    <InputError
                                        // message={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="my-4    ">
                                    <InputLabel
                                        htmlFor="email"
                                        value="Akhir Ayat"
                                    />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        // value={data.email}
                                        className="mt-1 block w-full shadow-xl"
                                        autoComplete="username"
                                        isFocused={true}
                                        // onChange={(e) =>
                                        //     setData("email", e.target.value)
                                        // }
                                    />

                                    <InputError
                                        // message={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="w-full mt-5 flex justify-end">
                                    <PrimaryButton
                                        className="w-1/4 flex justify-center shadow-xl bg-black"
                                        // disabled={processing}
                                    >
                                        Submit
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                        {/* END INPUT SURAH */}
                    </div>
                    {/* END LEFT CONTENT */}

                    {/* HISTORY */}
                    <div className="w-[calc(100%-67%)] grid gap-5">
                        <h1 className="text-2xl font-bold pt-2 text-gray-600">
                            Riwayat
                        </h1>
                        <div className="p-6 text-white bg-black shadow-xl sm:rounded-xl flex flex-col gap-5 h-[50rem] overflow-x-auto">
                            {/* Content */}
                            <div className="p-6 text-gray-900 bg-white shadow-xl sm:rounded-xl flex flex-col gap-2 h-[14rem]">
                                <div className="flex justify-between">
                                    <span className="px-2 rounded-full border border-gray-500 text-center font-thin text-xl">
                                        01
                                    </span>
                                    <ArrowRightIcon className="w-4 h-4" />
                                </div>
                                <div className="ps-2 py-3">
                                    <h2 className="text-xl font-semibold text-gray-600">
                                        Titlle
                                    </h2>
                                    <p className="text-gray-600">Titlle</p>
                                    <p className="text-gray-600">
                                        Progress: 1/2
                                    </p>
                                </div>
                                <input
                                    type="range"
                                    className="w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mx-auto"
                                />
                            </div>
                            <div className="p-6 text-gray-900 bg-white shadow-xl sm:rounded-xl flex flex-col gap-2 h-[14rem]">
                                <div className="flex justify-between">
                                    <span className="px-2 rounded-full border border-gray-500 text-center font-thin text-xl">
                                        01
                                    </span>
                                    <ArrowRightIcon className="w-4 h-4" />
                                </div>
                                <div className="ps-2 py-3">
                                    <h2 className="text-xl font-semibold text-gray-600">
                                        Titlle
                                    </h2>
                                    <p className="text-gray-600">Titlle</p>
                                    <p className="text-gray-600">
                                        Progress: 1/2
                                    </p>
                                </div>
                                <input
                                    type="range"
                                    className="w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mx-auto"
                                />
                            </div>
                            <div className="p-6 text-gray-900 bg-white shadow-xl sm:rounded-xl flex flex-col gap-2 h-[14rem]">
                                <div className="flex justify-between">
                                    <span className="px-2 rounded-full border border-gray-500 text-center font-thin text-xl">
                                        01
                                    </span>
                                    <ArrowRightIcon className="w-4 h-4" />
                                </div>
                                <div className="ps-2 py-3">
                                    <h2 className="text-xl font-semibold text-gray-600">
                                        Titlle
                                    </h2>
                                    <p className="text-gray-600">Titlle</p>
                                    <p className="text-gray-600">
                                        Progress: 1/2
                                    </p>
                                </div>
                                <input
                                    type="range"
                                    className="w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mx-auto"
                                />
                            </div>
                            <div className="p-6 text-gray-900 bg-white shadow-xl sm:rounded-xl flex flex-col gap-2 h-[14rem]">
                                <div className="flex justify-between">
                                    <span className="px-2 rounded-full border border-gray-500 text-center font-thin text-xl">
                                        01
                                    </span>
                                    <ArrowRightIcon className="w-4 h-4" />
                                </div>
                                <div className="ps-2 py-3">
                                    <h2 className="text-xl font-semibold text-gray-600">
                                        Titlle
                                    </h2>
                                    <p className="text-gray-600">Titlle</p>
                                    <p className="text-gray-600">
                                        Progress: 1/2
                                    </p>
                                </div>
                                <input
                                    type="range"
                                    className="w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mx-auto"
                                />
                            </div>
                            {/* END Content */}
                        </div>
                    </div>
                    {/* END HISTORY */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Progress;
