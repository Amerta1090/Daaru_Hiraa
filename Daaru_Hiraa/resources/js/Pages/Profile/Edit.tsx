import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Navbar from "@/Components/Navbar";
import { ChevronLeftIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { Transition } from "@headlessui/react";
import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
    notifications,
    users,
}: PageProps<{
    mustVerifyEmail: boolean;
    status?: string;
    users: [
        {
            number: number;
            name: string;
            email: string;
            email_verified_at: string;
            created_at: string;
            updated_at: string;
            id: number;
        }
    ];
    notifications: any;
}>) {
    return (
        // console.log(auth.user),
        // console.log(users[0].number),
        <>
            <Navbar user={auth.user} notifications={notifications} />
            <Head title="Profile" />

            <div className="pt-32">
                <div className="max-w-xl mx-auto sm:px-6 lg:px-8 space-y-6 ">
                    <div className="p-4 sm:p-8 bg-white shadow-sm sm:rounded-xl flex flex-col gap-5">
                        {/* HEDAER */}
                        <div className="flex gap-32">
                            <button
                                className=" rounded-full bg-primary text-white hover:bg-secondary hover:text-primary transition ease-in-out duration-200 p-2 flex items-center"
                                onClick={() => window.history.back()}
                            >
                                <ChevronLeftIcon className="w-5" />
                            </button>
                            <h1 className="text-center font-bold text-3xl">
                                PROFILE
                            </h1>
                        </div>
                        {/* END HEDAER */}
                        {/* IMAGE PROFILE */}
                        <div className="flex items-center justify-center">
                            <div className="relative">
                                <span className="inline-block h-32 w-32 rounded-full overflow-hidden bg-gray-100">
                                    <img
                                        src="https://i.pinimg.com/564x/a7/8e/22/a78e2233bfe227464ad3896475b9650d.jpg"
                                        alt=""
                                        className="-"
                                    />
                                </span>
                                <button className="absolute bottom-1 right-2 bg-primary text-white hover:bg-secondary hover:text-primary transition ease-in-out duration-200 rounded-full p-2 flex justify-center items-center">
                                    <PencilSquareIcon className="w-5" />
                                </button>
                            </div>
                        </div>
                        {/* END IMAGE PROFILE */}

                        {/* FORM */}
                        <form onSubmit={() => {}} className="mt-6 space-y-6">
                            <div>
                                <InputLabel htmlFor="name" value="Name" />

                                <TextInput
                                    id="name"
                                    className="mt-1 block w-full"
                                    value={auth.user.name}
                                    // onChange={(e) => setData('name', e.target.value)}
                                    required
                                    isFocused
                                    autoComplete="name"
                                />

                                {/* <InputError className="mt-2" message={errors.name} /> */}
                            </div>

                            <div>
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    className="mt-1 block w-full"
                                    value={auth.user.email}
                                    disabled
                                    autoComplete="username"
                                />

                                {/* <InputError className="mt-2" message={errors.email} /> */}
                            </div>

                            <div>
                                <InputLabel htmlFor="number" value="Number" />

                                <TextInput
                                    id="number"
                                    // ref={currentPasswordInput}
                                    value={"-"}
                                    // onChange={(e) => setData('current_password', e.target.value)}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                />

                                {/* <InputError message={errors.current_password} className="mt-2" /> */}
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="collage"
                                    value="Universitas"
                                />

                                <TextInput
                                    id="collage"
                                    // ref={currentPasswordInput}
                                    value={"-"}
                                    // onChange={(e) => setData('current_password', e.target.value)}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                />

                                {/* <InputError message={errors.current_password} className="mt-2" /> */}
                            </div>
                            <div>
                                <InputLabel htmlFor="address" value="Alamat" />

                                <TextInput
                                    id="address"
                                    // ref={currentPasswordInput}
                                    value={"-"}
                                    // value={users[0].address}
                                    // onChange={(e) => setData('current_password', e.target.value)}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                />

                                {/* <InputError message={errors.current_password} className="mt-2" /> */}
                            </div>
                        </form>
                        {/* END FORM */}

                        <PrimaryButton className="rounded-xl flex items-center justify-center py-3">
                            Simpan Perubahan
                        </PrimaryButton>
                    </div>
                    {/* <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div> */}
                </div>
            </div>
        </>
    );
}
