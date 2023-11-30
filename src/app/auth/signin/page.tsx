'use client';
import React, { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignInPage = () => {
  const router = useRouter();
    const { status } = useSession();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async () => {
        setMessage('Signing in...');
        try {
            const signInResponse = await signIn('credentials', {
                email,
                password,
                redirect: false,
            })
            if(!signInResponse || signInResponse.ok !== true) {
                setMessage("Invalid credentials");
            } else {
                router.refresh();
            }
        } catch(err) {
            console.log(err);
        }
        setMessage(message);
    };
    useEffect(() => {
        if (status === 'authenticated') {
            router.refresh();
            router.push('/');
        }
    }, [status]);
  return (
    <div className="h-screen w-full">
        <div className=" bg-slate-800 text-white py-2 px-2">
            Bankwise Admin
        </div>
        <div className="container mx-auto px-4 h-full bg-slate-200">
            <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12">
                    <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-blueGray-200 border-0">
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <div className="text-center mb-3 font-bold pt-6">
                                <span className="text-lg">Sign in with credentials</span>
                            </div>
                            <form>
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-xs font-bold mb-2" htmlFor="grid-password"> Email </label>
                                    <input
                                        type="email"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Email"
                                        value={email} onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-xs font-bold mb-2"htmlFor="grid-password">Password</label>
                                    <input
                                        type="password"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Password"
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <p>{message}</p>
                                <div className="text-center mt-6">
                                    <button
                                      className="bg-slate-400 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                      type="button"
                                      onClick={handleSubmit}
                                    >
                                      Sign In
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default SignInPage