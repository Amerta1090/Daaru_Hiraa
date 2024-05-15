import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

const JadwalSholat = ({ auth, notifications }: PageProps) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            title="Mutaba'ah Sholat"
            notifications={notifications}
        >
            <Head title="Mutaba'ah Sholat" />

            <main className="">To be continued</main>
        </AuthenticatedLayout>
    );
};

export default JadwalSholat;
