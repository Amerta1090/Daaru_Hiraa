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

const Progress = ({ auth, notifications }: PageProps) => {
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
        <AuthenticatedLayout
            user={auth.user}
            title="Mutaba'ah Al-Qur'an"
            notifications={notifications}
        >
            <Head title="Progress" />

            <div className="mx-auto px-2">
                {/* TOP CONTENT */}
                <div className="grow flex flex-col gap-5">
                    {/* HEADER */}
                    <div className="bg-background shadow-sm sm:rounded-xl h-[25rem]">
                        <h1 className="px-5 py-2 text-xl font-semibold text-textPrimary">
                            Aktivitas
                        </h1>
                    </div>
                    {/* END HEADER */}

                    {/* END TOP CONTENT */}

                    {/* BOTTOM CONTENT*/}
                    {/* INPUT SURAH */}
                    <div className="flex gap-5">
                        <div className="shadow-sm bg-white rounded-xl flex-col gap-2 py-2 max-w-3xl flex justify-between">
                            <h1 className="text-xl font-semibold text-textPrimary px-5 pt-3">
                                Input Surah
                            </h1>
                            {/* SURAH */}
                            <div className="px-5 relative mb-10">
                                <div className="flex gap-5 overflow-y-auto w-[95%] absolute py-5 -top-3">
                                    {isLoading && (
                                        <div className="flex justify-center items-center w-full">
                                            <p className="text-center">
                                                Memuat Data...
                                            </p>
                                        </div>
                                    )}
                                    {surahs.map((surah: any, index: number) => (
                                        <span
                                            className="px-3 py-2 rounded-xl border bg-gray-300 text-white text-center text-sm cursor-pointer text-nowrap"
                                            key={index}
                                        >
                                            {surah.nama_latin}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/* END SURAH */}

                            <form className="rounded-xl py-5 flex flex-wrap gap-5 items-center justify-center">
                                <div className="my-4 w-[45%]">
                                    <InputLabel
                                        htmlFor="email"
                                        value="Mulai Surah"
                                    />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        // value={data.email}
                                        className="mt-1 block w-full"
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
                                <div className="my-4 w-[45%]">
                                    <InputLabel
                                        htmlFor="email"
                                        value="Akhir Surah"
                                    />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        // value={data.email}
                                        className="mt-1 block w-full"
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
                                <div className="my-4 w-[45%]">
                                    <InputLabel
                                        htmlFor="email"
                                        value="Mulai Ayat"
                                    />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        // value={data.email}
                                        className="mt-1 block w-full"
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
                                <div className="my-4 w-[45%]">
                                    <InputLabel
                                        htmlFor="email"
                                        value="Akhir Ayat"
                                    />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        // value={data.email}
                                        className="mt-1 block w-full"
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

                                <div className="w-full flex justify-end mr-10">
                                    <PrimaryButton
                                        className=" flex justify-center "
                                        // disabled={processing}
                                    >
                                        Unggah
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                        {/* END INPUT SURAH */}

                        {/* HISTORY */}
                        <div className=" grid grow gap-5 shadow-sm">
                            <div className="p-6 text-white bg-background sm:rounded-xl flex flex-col gap-5">
                                <h1 className="text-xl font-semibold text-textPrimary ">
                                    Riwayat
                                </h1>
                                <div className="flex flex-col h-[20rem] gap-5 overflow-x-scroll">
                                    {/* Content */}
                                    <div className="p-6 text-gray-900 bg-white shadow-xl sm:rounded-xl flex flex-col gap-2 h-[14rem] border">
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
                                            <p className="text-gray-600">
                                                Titlle
                                            </p>
                                            <p className="text-gray-600">
                                                Progress: 1/2
                                            </p>
                                        </div>
                                        <input
                                            type="range"
                                            className="w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-primary mx-auto"
                                        />
                                    </div>
                                    <div className="p-6 text-gray-900 bg-white shadow-xl sm:rounded-xl flex flex-col gap-2 h-[14rem] border">
                                        <div className="flex justify-between">
                                            <span className="px-2 rounded-full border border-gray-500 text-center font-thin text-xl">
                                                02
                                            </span>
                                            <ArrowRightIcon className="w-4 h-4" />
                                        </div>
                                        <div className="ps-2 py-3">
                                            <h2 className="text-xl font-semibold text-gray-600">
                                                Titlle
                                            </h2>
                                            <p className="text-gray-600">
                                                Titlle
                                            </p>
                                            <p className="text-gray-600">
                                                Progress: 1/2
                                            </p>
                                        </div>
                                        <input
                                            type="range"
                                            className="w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-primary mx-auto"
                                        />
                                    </div>
                                    {/* END Content */}
                                </div>
                            </div>
                        </div>
                        {/* END HISTORY */}
                    </div>
                </div>
                {/* END BOTTOM CONTENT*/}
            </div>
        </AuthenticatedLayout>
    );
};

export default Progress;
