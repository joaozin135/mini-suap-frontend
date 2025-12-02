import { SideBar } from "../../../assets/components/SideBar";
import { Navbar } from "../../../assets/components/Navbar";

export function NewCalled(){
    return (
        <main className="flex items-start size-full bg-[#F6F9FC]">
            <SideBar 
                text="Mini Suap"
            />
            <aside className="size-full">
                <Navbar />
            </aside>

        </main>
    )
}

