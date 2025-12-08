import { LucideCircleCheck, LucideSquarePen, LucideTrash } from "lucide-react"
import { Navbar } from "../../../assets/components/Navbar"
import { SideBar } from "../../../assets/components/SideBar"

export function Called(){
    return(
        <main className="flex items-start size-full bg-[#F6F9FC]">
            <SideBar text="Mini Suap"/>
            <aside className="size-full">
                <Navbar />
                <div className="p-4">
                    <div className="">
                        <h1 className="font-bold text-3xl">Chamados</h1>
                        <h2 className="text-[#797979]">Chamados abertos recentemente</h2>
                    </div>

                    <div className="bg-white w-full flex flex-col p-8 space-y-4 rounded-lg border-border border-1">
                        <div className="text-2xl">1 Chamado</div>
                        <div className="border-1 border-border p- rounded-lg">
                            <div className="p-4">
                                <h2 className="text-border text-lg">HD-001</h2>
                                <h1 className="font-regular text-xl">Problemas com Dispositivo Móvel</h1>
                            </div>
                            <div className="flex flex-row justify-center p-4 gap-10">
                                <button><LucideSquarePen size={32}/></button>
                                <button><LucideTrash size={32}/></button>
                                <button><LucideCircleCheck size={32}/></button>
                            </div>
                        </div>
                    </div>
                </div>

                   
            </aside>
        </main>
    )
}