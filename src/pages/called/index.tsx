import { Navbar } from "../../../assets/components/Navbar"
import { SideBar } from "../../../assets/components/SideBar"

export function Called(){
    return(
        <main className="flex items-start size-full bg-[#F6F9FC]">
            <SideBar text="Mini Suap"/>
            <aside className="size-full p-4">
                <Navbar />
                
                   
            </aside>
        </main>
    )
}