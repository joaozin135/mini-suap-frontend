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
                <div>
                    <div className="p-4">
                        <h1 className="font-bold text-3xl">Novo Chamado</h1>
                        <h2 className="text-[#797979]">Como podemos te ajudar hoje?</h2>
                    </div>
                    <div className="border-2 border-gray-500 flex flex-col p-8">
                        <h1>Detalhes do Chamado</h1>
                        <div className="grid sm:grid-cols-2 grid-cols-1 p-4 gap-4">
                            <div className="w-full flex flex-col col-span-2">
                                <label htmlFor="assunto">Assunto</label>
                                <input id="assunto" type="text" placeholder="Breve descrição do problema" className="bg-[#EDEDED] p-2 rounded-sm"/>
                            </div>
                            <div className="w-full flex flex-col">
                                <label htmlFor="prioridade">Pridoridade</label>
                                <select id="prioridade" className="bg-[#EDEDED] p-2 rounded-sm">
                                    <option value="">Selecione uma opção</option>
                                    <option value="1">Baixa</option>
                                    <option value="2">Normal</option>
                                    <option value="3">Alta</option>
                                    <option value="4">Urgente</option>
                                    </select>
                            </div>
                            <div className="w-full flex flex-col">
                                <label htmlFor="categoria">Categoria</label>
                                <select  id="categoria" className="bg-[#EDEDED] p-2 rounded-sm">
                                    <option value="">Selecione uma opção</option>
                                    <option value="1">Redes</option>
                                    <option value="2">Sistemas Operacionais</option>
                                    <option value="3">Software de Gestão</option>
                                    <option value="4">Hardware</option>
                                    <option value="4">Impressoras</option>
                                </select>
                            </div>
                             <div className="w-full flex flex-col col-span-2">
                                <label htmlFor="descricao">Descrição</label>
                                <textarea id="descricao" placeholder="Forneça informações detalhadas sobre sua solicitação ou problema" className="bg-[#EDEDED] p-2 rounded-sm min-h-32"/>
                            </div>
                             <div className="w-full flex flex-col col-span-2">
                                <label htmlFor="assunto">Anexos</label>
                                <textarea id="assunto" placeholder="Forneça informações detalhadas sobre sua solicitação ou problema" className="bg-[#EDEDED] p-2 rounded-sm min-h-32"/>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

        </main>
    )
}

