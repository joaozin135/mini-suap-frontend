import { Navbar } from "../../../assets/components/Navbar"
import { SideBar } from "../../../assets/components/SideBar"

export function Called(){
    return(
        <main className="flex items-start size-full bg-[#F6F9FC]">
            <SideBar text="Mini Suap"/>
            <aside className="size-full">
                <Navbar />
                <div className="p-4">
                    <div>
                        <h1 className="font-bold text-3xl">Chamados</h1>
                        <h2 className="text-[#797979]">Chamados abertos recentemente</h2>
                    </div>
                    
                </div>
                   
            </aside>
        </main>
    )
}