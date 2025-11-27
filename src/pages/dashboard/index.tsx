import { LucideCircleAlert, LucideUserRound } from "lucide-react";
import { SideBar } from "../../../assets/components/SideBar";
import { CardTop } from "../../../assets/components/card";
import { TableTop } from "./components/TableTop";
import { Navbar } from "../../../assets/components/Navbar";

export function Dashboard (){
    return(
        <main className="flex items-start size-full bg-[#F6F9FC]">
            <SideBar text="Mini Suap"/>
            <aside className="size-full p-4">
                <Navbar />
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