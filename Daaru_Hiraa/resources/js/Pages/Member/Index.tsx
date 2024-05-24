import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    BanknotesIcon,
    ClockIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { useState } from "react";
import Progressbar from "@/Components/Progressbar";
import Table from "@/Components/Table";
import Carausel from "@/Components/Carausel";
import CarauselSchdule from "@/Components/CarauselSchdule";

const jadwalList = [
    {
        title: "Kultum",
        time: "14.00 - 16.00",
        mentor: "Andi",
    },
    {
        title: "Pengajian Bang",
        time: "21.00 - 23.00",
        mentor: "Majid Ahmad",
    },
    {
        title: "Kultunm",
        time: "14.00 - 16.00",
        mentor: "Andi",
    },
    {
        title: "Pengajian Bang",
        time: "21.00 - 23.00",
        mentor: "Majid Ahmad",
    },
    {
        title: "Kultunm",
        time: "14.00 - 16.00",
        mentor: "Andi",
    },
    {
        title: "Pengajian Bang",
        time: "21.00 - 23.00",
        mentor: "Majid Ahmad",
    },
    {
        title: "Kultunm",
        time: "14.00 - 16.00",
        mentor: "Andi",
    },
    {
        title: "Pengajian Bang",
        time: "21.00 - 23.00",
        mentor: "Majid Ahmad",
    },
    {
        title: "Kultunm",
        time: "14.00 - 16.00",
        mentor: "Andi",
    },
    {
        title: "Pengajian Bang",
        time: "21.00 - 23.00",
        mentor: "Majid Ahmad",
    },
    {
        title: "Kultunm",
        time: "14.00 - 16.00",
        mentor: "Andi",
    },
    {
        title: "Pengajian Bang",
        time: "21.00 - 23.00",
        mentor: "Majid Ahmad",
    },
];

const Home = ({ auth, rollCalls, notifications, announcements }: PageProps) => {
    const [progress, setProgress] = useState(0);

    // progress
    const onChangeProgress = () => {
        setProgress((prev) => prev + 20);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            title="Dashboard"
            notifications={notifications}
        >
            <Head title="Dashboard" />

            <div className="flex gap-5 flex-col px-2">
                {/* TOP CONTENT */}
                <div className="flex gap-5 flex-wrap">
                    <div className="flex  flex-col gap-5">
                        {/* AKTIVITAS */}
                        <div className="flex flex-col gap-2 bg-background py-2 px-5 rounded-xl">
                            <h1 className="mb-2 text-xl font-semibold text-textPrimary">
                                Aktivitas
                            </h1>
                            <div className="flex gap-5 pb-4">
                                {/* DENDA */}
                                <div className="bg-[#BFF6C3] shadow-sm sm:rounded-xl grow gap-5 flex items-center justify-start  text-textPrimary px-5 w-[20rem]">
                                    <div className="text flex justify-start flex-col ">
                                        <span className="rounded-full bg-green-500 flex items-center justify-center px-3 py-5 w-20 text-background ">
                                            <BanknotesIcon className="-rotate-90 w-10" />
                                        </span>
                                    </div>
                                    <div className="flex flex-col justify-start items-start">
                                        <p className="font-bold text-4xl">
                                            Rp 5.000
                                        </p>
                                        <p className=" text-2xl font-thin  text-gray-700">
                                            Total Denda
                                        </p>
                                    </div>
                                </div>
                                {/* END DENDA */}

                                {/* PERINGATAN */}
                                <div className="bg-[#FAEDCD] shadow-sm sm:rounded-xl grow flex justify-start text-textPrimary relative pe-14">
                                    {/* SP */}
                                    <div className="rounded-bl-xl rounded-tr-xl absolute right-0 top-0 bg-textTidakHadir py-2 px-3 text-white font-semibold">
                                        SP
                                    </div>
                                    {/* END SP */}

                                    {/* CONTENT BOTTOM */}
                                    <div className="flex ">
                                        {/* PROGRESSBAR */}
                                        <div className="p-6">
                                            <Progressbar
                                                sqSize={150}
                                                strokeWidth={8}
                                                percentage={20}
                                            />
                                            {/* <button
                                                onClick={onChangeProgress}
                                                className="text-neutral-800 rounded-lg border border-neutral-800 bg-transparent px-2 py-1 min-w-[140px] mt-4 hover:bg-gray-200 hover:border-gray-200 "
                                            >
                                                Update Progress
                                            </button> */}
                                        </div>
                                        {/* END PROGRESSBAR */}

                                        <span className="flex flex-col gap-2 items-start justify-start my-10">
                                            <p className="font-bold text-xl text-black">
                                                Pelanggaran
                                                <div className="w-full h-[0.1rem] bg-black"></div>
                                            </p>
                                            <ul className="flex font-normal text-black">
                                                <li className="font-thin">
                                                    1. Tidak mengikuti kajian
                                                </li>
                                            </ul>
                                        </span>
                                    </div>
                                    {/* END CONTENT BOTTOM */}
                                </div>
                                {/* END PERINGATAN */}
                            </div>
                        </div>
                        {/* END AKTIVITAS */}

                        {/* ANNOUNCEMENT */}
                        <div className=" bg-background border px-5 py-2 rounded-xl h-[18rem]">
                            <div className="lg:w-[50rem]">
                                <h1 className="mb-2 text-xl font-semibold text-textPrimary">
                                    Pengumuman
                                </h1>
                                {/* CONTENT */}
                                <div className=" flex items-center justify-center gap-10 text-textPrimary ">
                                    <Carausel
                                        auto={true}
                                        slides={announcements}
                                        className="w-3/4 h-[14rem] border rounded-xl flex items-center justify-center"
                                    />
                                </div>
                            </div>
                            {/* END CONTENT */}
                        </div>
                        {/* END ANNOUNCEMENT */}
                    </div>

                    {/* PRESENSI */}
                    <div className="grow bg-background rounded-xl shadow-sm px-6 py-4 flex flex-col gap-5">
                        <h1 className="pb-2 text-xl font-semibold text-textPrimary">
                            Riwayat Presensi
                        </h1>
                        <div className="w-full h-[29rem] rounded-xl bg overflow-y-scroll border">
                            {/* TABLE */}
                            <Table
                                titles={["No", "Name", "Date", "Status"]}
                                datas={rollCalls}
                            />
                            {/* END TABLE */}
                        </div>
                    </div>
                    {/* END PRESENSI */}
                </div>

                {/* JADWAL */}
                <div className="w-full bg-background shadow-md rounded-xl flex items-center justify-center ">
                    <div className="py-5 text-gray-900 flex flex-col gap-2">
                        <h1 className="text-xl font-semibold text-textPrimary">
                            Jadwal Hari ini
                        </h1>
                        {/* COURSEL JADWAL */}
                        <CarauselSchdule auto={true} slides={jadwalList} />
                        {/* END COURSEL JADWAL */}
                    </div>
                </div>
            </div>
            {/* END JADWAL */}
        </AuthenticatedLayout>
    );
};

export default Home;
