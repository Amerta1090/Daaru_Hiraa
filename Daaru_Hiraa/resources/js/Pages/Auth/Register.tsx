import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import image from "../../../../assets/logo.png";
import Checkbox from "@/Components/Checkbox";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false,
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

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
                            Sign Up
                        </h1>
                    </div>

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="name" value="Name" />
                            <TextInput
                                id="name"
                                name="Full Name"
                                value={data.name}
                                className="mt-1 block w-full shadow-xl"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full shadow-xl"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
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
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                            />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full shadow-xl"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                required
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex items-center justify-between gap-2 flex-col sm:flex-row">
                            <div className="w-full mt-4">
                                <PrimaryButton
                                    className="w-full flex justify-center shadow-xl bg-primary hover:bg-slate-900"
                                    disabled={processing}
                                >
                                    Register
                                </PrimaryButton>
                            </div>

                            <div className="w-full md:hidden sm:mt-3">
                                <Link
                                    href={route("login")}
                                    className="w-full flex justify-center shadow-xl bg-slate-500  px-4 py-1 rounded-xl text-white font-semibold"
                                >
                                    <span>Sign In</span>
                                </Link>
                            </div>
                        </div>
                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.terms}
                                    onChange={(e) =>
                                        setData("terms", e.target.checked)
                                    }
                                />
                                <span className="ms-2 text-sm text-gray-600">
                                    I agree to the therms and condicition
                                </span>
                            </label>
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
                    <p className="font-bold text-white">Already registered?</p>

                    <Link
                        href={route("login")}
                        className="rounded-xl bg-white  px-3 py-1 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:hover:text-primary dark:focus-visible:ring-white mt-5"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </GuestLayout>
    );
}
