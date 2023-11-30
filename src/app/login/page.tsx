const page = () => {
  return (
    <div className="h-screen bg-red-900">
        <div className=" bg-slate-800 text-white py-2 px-2">
            Bankwise Admin
        </div>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 w-full mb-6 shadow-lg rounded-lg">
                        </div>
                        <div className="justify-center items-center h-12 rounded-lg ">
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-blue-200">
                                <div className="text-center pt-3 mb-3 font-bold">Signin with credentials</div>
                                </div>
                                <form>
                                    <div className="relative w-full pr-3 pl-3 bg-blue-200">
                                        <label className="block uppercase text-blue-800 -bold mb-2 text xs font" htmlFor="grid-password">EMAIL</label>
                                        <input type="email" className="border-0 px-3 py-3 text-blue-800 bg-white rounded-sm shadow
                                        focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" />
                                    </div>
                                    <div className="relative w-full pr-3 pl-3 bg-blue-200">
                                        <label className="block uppercase text-blue-800 -bold mb-2 text xs font" htmlFor="grid-password">PASSWORD</label>
                                        <input type="password" className="border-0 px-2 py-3  text-blue-800 bg-white rounded-sm shadow
                                        focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="password" />
                                    </div>
                                    <div className="text-center mt-4">
                                        <button className="bg-gradient-to-r  text-white text-sm font-bold uppercase px-6 py-3 rounded shadow
                                        hover:shadow-lg outline-none focus:mr-1 mb-1 w-full ease-linear trasition-all duration-150" type="button">Sign In</button>
                                    </div>
                                </form>
                         </div>
                    </div>
             </div>
        </div>
    </div>
                        
  )    
}

export default page