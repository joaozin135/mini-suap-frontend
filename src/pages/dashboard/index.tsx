import { LucideCircleAlert, LucideUserRound } from "lucide-react";
import { SideBar } from "../../../assets/components/SideBar";
import { CardTop } from "../../../assets/components/card";
import { TableTop } from "./components/TableTop";
import { Navbar } from "../../../assets/components/Navbar";

export function Dashboard (){
    return(
        <main className="flex items-start size-full bg-[#F6F9FC]">
            <SideBar text="Mini Suap"/>
            <aside className="size-full flex flex-col">
                <Navbar />
                <section className="p-4">
                    <div>    
                        <h1 className="font-bold text-3xl">Tela inicial</h1>
                        <h2 className="text-[#797979]">Bem vindo ao Mini Suap!</h2>
                    </div>
                    <div className="space-y-2 p-4 flex flex-col">
                        <div id="card-row" className="grid auto-rows-min gap-4 md:grid-cols-4 items-start space-y-4">
                        <CardTop
                            className="bg-white" 
                            icon={LucideCircleAlert}
                            text="Total de Chamados"
                            value="17"
                            description="+12% comparado ao último mês"
                        />
                        <CardTop 
                            className="bg-white"
                            icon={LucideUserRound}
                            text="Chamados Abertos"
                            value="29"
                            description="-7% comparado ao último mês"
                        />
                        <CardTop 
                            className="bg-white"
                            icon={LucideUserRound}
                            text="Resolvidos Hoje"
                            value="29"
                            description="+8% comparado ao último mês"
                        />
                        <CardTop 
                            className="bg-white"
                            icon={LucideUserRound}
                            text="Chamados em andamento"
                            value="29"
                            description="+5% comparado ao última semana"
                        />
                        </div>
                    </div> 
                    <article className="space-y-4 items-center">
                        <h1 className="text-2xl font-semibold">Chamados recentes</h1>
                        <TableTop />
                        
                    </article>
                </section>
                
            </aside>
        </main>
    )
}