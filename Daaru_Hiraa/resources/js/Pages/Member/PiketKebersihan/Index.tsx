import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import PrimaryButton from "@/Components/PrimaryButton";
import Select from "@/Components/Select";
import Table from "@/Components/Table";
import { Head } from "@inertiajs/react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

const JadwalPiket = ({ auth, notifications }: PageProps) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            title="Piket Kebersihan"
            notifications={notifications}
        >
            <Head title="Piket Kebersihan" />

            <main className="mx-auto px-2 flex justify-center items-start gap-5 flex-wrap text-textPrimary">
                {/* LEFT CONTENT  */}
                <div className="flex flex-col w-[60%] gap-5">
                    <div className="py-5 bg-background px-5 grid gap-2 rounded-xl shadow-md">
                        <h1 className="pb-2 text-xl font-semibold text-textPrimary">
                            Form Pengumpulan
                        </h1>
                        {/* OPSI */}
                        <div className="flex items-center justify-center gap-5">
                            <div className="flex items-center justify-center w-full">
                                <div className="w-full">
                                    <Select
                                        name="Waktu "
                                        options={[
                                            "12.00-13.00",
                                            "piket2",
                                            "piket3",
                                            "piket4",
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <div className="w-full">
                                    <Select
                                        name="Tempat"
                                        options={[
                                            "Lantai 1",
                                            "piket2",
                                            "piket3",
                                            "piket4",
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* END OPSI */}

                        {/* UPLOAD FILE */}
                        <div className="w-full flex flex-col gap-5">
                            <h1>Unggah Bukti</h1>

                            <div className="flex items-center justify-center w-full">
                                <label
                                    form="dropzone-file"
                                    className="flex-col w-full h-[20rem] rounded-xl flex items-center justify-center hover:bg-gray-300 bg-gray-200 group transition duration-300 ease-in-out cursor-pointer"
                                >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <ArrowUpTrayIcon className="w-8 text-gray-500 group-hover:text-gray-700" />

                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                                            <span className="font-semibold">
                                                Klik untuk mengunggah
                                            </span>
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            SVG, PNG, JPG or GIF (MAX.
                                            800x400px)
                                        </p>
                                    </div>
                                    <input
                                        id="dropzone-file"
                                        type="file"
                                        className="hidden"
                                    />
                                </label>
                            </div>

                            <div className="flex items-center justify-end">
                                <PrimaryButton className="">
                                    Unggah
                                </PrimaryButton>
                            </div>
                        </div>
                        {/* END UPLOAD FILE */}
                    </div>
                </div>
                {/* END LEFT CONTENT  */}

                {/* RIGHT CONTENT  */}

                <div className="grow bg-background rounded-xl shadow-sm px-6 py-4 flex flex-col gap-5">
                    <h1 className="pb-2 text-xl font-semibold text-textPrimary">
                        Riwayat Piket
                    </h1>
                    <div className="w-full max-h-[48rem] rounded-xl bg overflow-y-scroll border">
                        {/* TABLE */}
                        <Table
                            titles={["No", "Tempat", "Tanggal", "Status"]}
                            datas={[]}
                        />
                        {/* END TABLE */}
                    </div>
                </div>
                {/* END RIGHT CONTENT  */}
            </main>
        </AuthenticatedLayout>
    );
};

export default JadwalPiket;
