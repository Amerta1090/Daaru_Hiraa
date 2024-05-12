import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

const Denda = ({ auth, notifications }: PageProps) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            title="Denda"
            notifications={notifications}
        >
            <Head title="Denda" />

            <main className="">To be continued</main>
        </AuthenticatedLayout>
    );
};

export default Denda;
