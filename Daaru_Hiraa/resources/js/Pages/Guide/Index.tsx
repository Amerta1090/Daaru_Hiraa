import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

const Guide = ({ auth, notifications }: PageProps) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            title="Guide"
            notifications={notifications}
        >
            <Head title="Guide" />

            <main className="">To be continued</main>
        </AuthenticatedLayout>
    );
};

export default Guide;
