import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import PrimaryButton from "@/Components/PrimaryButton";
import Select from "@/Components/Select";
import Table from "@/Components/Table";
import { Head } from "@inertiajs/react";

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
                    {/* TOP CONTENT */}
                    <div className="py-5 bg-primary px-5 grid gap-2 rounded-xl shadow-xl">
                        <h1>Progress Hafalan</h1>
                        {/* OPSI */}
                        <div className="flex items-center justify-center ">
                            <div className="flex items-center justify-center w-1/2">
                                <div className="w-3/4">
                                    <Select
                                        name="Piket"
                                        options={[
                                            "piket1",
                                            "piket2",
                                            "piket3",
                                            "piket4",
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-1/2">
                                <div className="w-3/4">
                                    <Select
                                        name="Piket"
                                        options={[
                                            "piket1",
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
                            <h1>Upload File</h1>
                            <div className="w-full bg-gray-300 border h-[15rem] rounded-xl" />
                            <div className="flex items-center justify-end">
                                <PrimaryButton className="">
                                    Upload File
                                </PrimaryButton>
                            </div>
                        </div>
                        {/* END UPLOAD FILE */}
                    </div>
                    {/* END TOP CONTENT */}

                    {/*  BOTTOM CONTENT */}
                    <div className="w-full grow bg-primary rounded-xl px-5 py-2 overflow-hidden h-[350px]">
                        <Table
                            titles={["No", "Tempat", "Status", "Tanggal"]}
                            datas={[]}
                        />
                    </div>
                    {/* END BOTTOM CONTENT */}
                </div>

                {/* END LEFT CONTENT  */}

                {/* RIGHT CONTENT  */}
                <div className="py-5 bg-primary rounded-xl shadow-xl px-2 grow">
                    <h1>Progress Hafalan</h1>
                </div>
                {/* END RIGHT CONTENT  */}
            </main>
        </AuthenticatedLayout>
    );
};

export default JadwalPiket;
