
import { BellAlertIcon, EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Navbar = async () => {
   
    return (
        <div className='flex justify-end p-2 bg-slate-100'>
            <ul className="flex item-center gap-x-4">
                <li>
                    <div className="text-['#2e4374'] border rounded p-1.5 border-gray-300">
                        <EnvelopeIcon className="h-4"/>
                    </div> 
                </li>
                <li>
                    <div  className="text-['#2e4374'] border rounded p-1.5 border-gray-300">
                        <UserIcon className="h-4"/>
                    </div>
                </li>
                <li>
                    <div className="text-['#2e4374'] border rounded p-1.5 border-gray-300">
                            <BellAlertIcon className="h-4"/>
                    </div>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;
