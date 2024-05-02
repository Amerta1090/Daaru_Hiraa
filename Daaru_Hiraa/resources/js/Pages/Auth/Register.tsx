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

            <div className="w-1/2 h-[100vh] bg-white overflow-hidden flex items-center justify-center">
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white overflow-hidden sm:rounded-lg">
                    <h1 className="mb-6 font-bold text-3xl">Sign Up</h1>

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
                        <div className="w-full mt-4">
                            <PrimaryButton
                                className="w-full flex justify-center shadow-xl"
                                disabled={processing}
                            >
                                Register
                            </PrimaryButton>
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
            <div className="w-1/2 bg-gray-500 shadow-md overflow-hidden h-[100vh] flex item-center justify-center items-center flex-col gap-10 image">
                <img src={image} alt="" />
                <h1 className="font-bold text-3xl text-white">
                    Welcome to Daaru Hiraa
                </h1>

                <div className="grid text-center">
                    <p className="font-bold text-white">Already registered?</p>

                    <Link
                        href={route("login")}
                        className="rounded-full bg-white  px-3 py-1 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:hover:text-[#0969DA] dark:focus-visible:ring-white mt-5"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </GuestLayout>
    );
}
