import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

const Piket = ({ auth }: PageProps) => {
    return (
        <AuthenticatedLayout user={auth.user} title="Jadwal Piket">
            <Head title="Dashboard" />

            <div className="h-[calc(100vh-120px)] mx-auto px-2">
                <h1>To Be Continued</h1>
            </div>
        </AuthenticatedLayout>
    );
};

export default Piket;
