import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
export default function DashboardLayout({ children}: { children: React.ReactNode}) {
    return (
        <>
            <div className='flex'>
                <SideBar/>
                <main className='h-screen w-full'>
                    <Navbar/>
                    <div className='wrapper h-screen'>
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
  }