import { LucideCircleAlert, LucideUserRound } from "lucide-react";
import { SideBar } from "../../../assets/components/SideBar";
import { CardTop } from "../../../assets/components/card";
import { TableTop } from "./components/TableTop";

export function Dashboard (){
    return(
        <main className="flex items-start size-full bg-[#F6F9FC]">
            <SideBar text="Mini Suap"/>
            <aside className="size-full p-4">
                <nav className="flex justify-end items-center">
                    <div id="card" className=" flex flex-col rounded-2xl w-fit">
                        <div id="card-header" className="p-3 flex items-center gap-3">
                            <div id="card-icon" className="p-2 rounded-full bg-[#D9D9D9]">
                                <LucideUserRound size={22} />  
                            </div>
                            <h1 className="text-lg font-medium">user</h1>
                        </div>
                    </div>
                </nav>
                <section className="space-y-12">
                    <article className="space-y-8">
                        <h1 className="font-bold text-3xl">Tela inicial</h1>
                        <div id="card-row" className="flex justify-start gap-8 items-start">
                        <CardTop 
                            icon={LucideCircleAlert}
                            text="Chamados Abertos"
                            value="17"
                        />

                        <CardTop 
                            className="bg-white"
                            icon={LucideUserRound}
                            text="Usuários"
                            value="29"
                        />
                        </div>
                    </article> 
                    <article className="space-y-4 items-center">
                        <h1 className="text-2xl font-semibold">Chamados recentes</h1>
                        <TableTop />
                        
                    </article>
                </section>
                
            </aside>
        </main>
    )
}