import { BuildingLibraryIcon, BuildingOffice2Icon, DocumentDuplicateIcon, ShieldCheckIcon, TagIcon, TicketIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";

const SideBar= async () => {
    return(
        <>
            <aside className="bg-[#2e4374]  h-screen w-16">
                <ul className="grid gap-y-4 text-white text-center text-xs">
                 <li  className="text-white mx-auto py-4 text-center font-semibold mt-6">BW</li>
                    <li>
                        <Tooltip
                            showArrow={false}
                            content="Bank Criteria" 
                            offset={15} 
                            placement={"right"}
                            closeDelay={0} 
                            classNames={{base: "bg-[#2e4374] rounded text-white text-xs py-0.5 px-2 mt-0.5 m-0", arrow: "bg-blue-900 py-0.5 px-2 mt-0.5 m-0"}}>
                            <Link href={'/bank-criteria'}>
                                <div className="hover:bg-white hover:text-[#2e4374] rounded w-fit px-2 py-2 mx-auto">
                                    <BuildingLibraryIcon className="h-5 mx-auto"/>
                                </div>
                            </Link>
                        </Tooltip>
                    </li>
                    <li>
                    <Tooltip
                        showArrow={false}
                        content="Subscription" 
                        offset={15} 
                        placement={"right"}
                        closeDelay={0} 
                        classNames={{base: "bg-[#2e4374] rounded text-white text-xs py-0.5 px-2 mt-0.5 m-0", arrow: "bg-blue-900 py-0.5 px-2 mt-0.5 m-0"}}>
                           <Link href={'/subscription'}>
                              <div className="hover:bg-white hover:text-[#2e4374] rounded w-fit px-2 py-2 mx-auto">
                                 <TicketIcon className="h-5 mx-auto"/>
                              </div>
                           </Link>
                     </Tooltip>
                    </li>
                    <li>
                    <Tooltip
                            showArrow={false}
                            content="Roles & permissions" 
                            offset={15} 
                            placement={"right"}
                            closeDelay={0} 
                            classNames={{base: "bg-[#2e4374] rounded text-white text-xs py-0.5 px-2 mt-0.5 m-0", arrow: "bg-blue-900 py-0.5 px-2 mt-0.5 m-0"}}>
                            <Link href={'/roles-permissions'}>
                                <div className="hover:bg-white hover:text-[#2e4374] rounded w-fit px-2 py-2 mx-auto">
                                    <ShieldCheckIcon className="h-5 mx-auto"/>
                                </div>
                            </Link>
                      </Tooltip>
                    </li>
                    <li>
                        <Tooltip
                            showArrow={false}
                            content="Manage Agencies" 
                            offset={15} 
                            placement={"right"}
                            closeDelay={0} 
                            classNames={{base: "bg-[#2e4374] rounded text-white text-xs py-0.5 px-2 mt-0.5 m-0", arrow: "bg-blue-900 py-0.5 px-2 mt-0.5 m-0"}}>
                            <Link href={'/managing-agencies'}>
                                <div className="hover:bg-white hover:text-[#2e4374] rounded w-fit px-2 py-2 mx-auto">
                                    <BuildingOffice2Icon className="h-5 mx-auto"/>
                                </div>
                            </Link>
                      </Tooltip>
                    </li>
                    <li>
                        <Tooltip
                            showArrow={false}
                            content="Document Checklist" 
                            offset={15} 
                            placement={"right"}
                            closeDelay={0} 
                            classNames={{base: "bg-[#2e4374] rounded text-white text-xs py-0.5 px-2 mt-0.5 m-0", arrow: "bg-blue-900 py-0.5 px-2 mt-0.5 m-0"}}>
                            <Link href={'/document-checklist'}>
                                <div className="hover:bg-white hover:text-[#2e4374] rounded w-fit px-2 py-2 mx-auto">
                                    <DocumentDuplicateIcon className="h-5 mx-auto"/>
                                </div>
                            </Link>
                      </Tooltip>
                    </li>
                    <li>
                        <Tooltip
                            showArrow={false}
                            content="Company Category Listing" 
                            offset={15} 
                            placement={"right"}
                            closeDelay={0} 
                            classNames={{base: "bg-[#2e4374] rounded text-white text-xs py-0.5 px-2 mt-0.5 m-0", arrow: "bg-blue-900 py-0.5 px-2 mt-0.5 m-0"}}>
                            <Link href={'/company-category-listing'}>
                                <div className="hover:bg-white hover:text-[#2e4374] rounded w-fit px-2 py-2 mx-auto">
                                    <TagIcon className="h-5 mx-auto"/>
                                </div>
                            </Link>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip
                            showArrow={false}
                            content="Settings" 
                            offset={15} 
                            placement={"right"}
                            closeDelay={0} 
                            classNames={{base: "bg-[#2e4374] rounded text-white text-xs py-0.5 px-2 mt-0.5 m-0", arrow: "bg-blue-900 py-0.5 px-2 mt-0.5 m-0"}}>
                                <Link href={'/settings'}>
                                    <div className="hover:bg-white hover:text-[#2e4374] rounded w-fit px-2 py-2 mx-auto">
                                        <WrenchScrewdriverIcon className="h-5 mx-auto"/>
                                    </div>
                                </Link>
                      </Tooltip>
                    </li>
                </ul>
            </aside>
        </>
    )
}
export default SideBar;