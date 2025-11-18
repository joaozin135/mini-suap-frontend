import { LucideCircleAlert, LucideUserRound } from "lucide-react";
import { SideBar } from "../../../assets/components/SideBar";
import { CardTop } from "../../../assets/components/card";

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
                            {/* <div id="card" className="bg-[#DCE9F5] flex flex-col rounded-2xl w-lg h-32">
                                <div id="card-header" className="p-3 flex items-start gap-3">
                                    <div id="card-icon" className="p-2 rounded-full bg-[#1C385B] text-white">
                                        <LucideCircleAlert size={32} />  
                                    </div>  
                                    <div className="flex flex-col gap-2 ">
                                    <h2 className="text-xl font-medium">Chamados Abertos</h2>
                                    <h1 className="text-4xl font-bold">17</h1>
                                    </div>
                                </div>
                            </div> */}
                            <div id="card" className="bg-white flex flex-col rounded-2xl w-lg h-32">
                                <div id="card-header" className="p-3 flex items-start gap-3 ">
                                    <div id="card-icon" className="p-2 rounded-full bg-[#D9D9D9]">
                                        <LucideUserRound size={32} />  
                                    </div>  
                                    <div className="flex flex-col gap-2 ">
                                    <h2 className="text-xl font-medium">Usuários</h2>
                                    <h1 className="text-4xl font-bold">29</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article> 
                    <article className="space-y-4 items-center">
                        <h1 className="text-2xl font-semibold">Chamados recentes</h1>
                        
                    </article>
                </section>
                
            </aside>
        </main>
    )
}