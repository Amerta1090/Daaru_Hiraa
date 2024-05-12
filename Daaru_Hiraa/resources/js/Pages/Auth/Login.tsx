import { useEffect, FormEventHandler } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import image from "../../../../assets/logo.png";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <div className="md:w-1/2 bg-white overflow-hidden flex items-center justify-center border rounded-lg shadow-xl md:h-[100vh] md:border-none sm:w-[500px] w-[350px]">
                <div className="w-full md:max-w-md md:mt-6 px-6 py-4 overflow-hidden">
                    <div className="flex sm:flex-col flex-wrap gap-3">
                        <div className="md:hidden flex items-center justify-center my-4 flex-col">
                            <img
                                src={image}
                                alt=""
                                className="w-[45px] sm:w-[60px] flex"
                            />
                            <h1 className="hidden sm:font-bold sm:text-xl sm:flex sm:text-red-700">
                                Welcome to Daaru Hiraa
                            </h1>
                        </div>
                        <h1 className="mb-6 font-bold text-xl md:text-3xl flex items-end">
                            Sign In
                        </h1>
                    </div>

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="email" value="Username" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full shadow-xl"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full shadow-xl"
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-between gap-2 flex-col sm:flex-row">
                            <div className="w-full mt-4">
                                <PrimaryButton
                                    className="w-full flex justify-center shadow-xl  bg-primary hover:bg-slate-900"
                                    disabled={processing}
                                >
                                    Log in
                                </PrimaryButton>
                            </div>

                            <div className="w-full md:hidden sm:mt-3">
                                <Link
                                    href={route("register")}
                                    className="w-full flex justify-center shadow-xl bg-slate-500 px-4 py-1 rounded-xl text-white font-semibold"
                                >
                                    <span>Sign Up</span>
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="ms-2 text-sm text-gray-600">
                                    Remember me
                                </span>
                            </label>
                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                        </div>
                    </form>
                </div>
            </div>
            <div className="hidden md:w-1/2 md:bg-gray-800 overflow-hidden h-[100vh] md:flex md:item-center md:justify-center items-center flex-col gap-10 image ">
                <img src={image} alt="" />
                <h1 className="font-bold text-3xl text-white">
                    Welcome to Daaru Hiraa
                </h1>

                <div className="grid text-center">
                    <p className="font-bold text-white">
                        Don't have an account?
                    </p>

                    <Link
                        href={route("register")}
                        className="rounded-xl bg-white px-3 py-1 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:hover:text-primary dark:focus-visible:ring-white mt-5"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </GuestLayout>
    );
}
