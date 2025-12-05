import { SideBar } from "../../../assets/components/SideBar";
import { Navbar } from "../../../assets/components/Navbar";
import { LucideAArrowUp, LucideUpload } from "lucide-react";
import { useState } from "react";
import api from "../../lib/api";

export function NewCalled(){

    const [assunto, setAssunto] = useState<string>("");
    const [prioridade, setPrioridade] = useState<string>("");
    const [categoria, setCategoria] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [anexos, setAnexos] = useState<Array<File>>([]);

    function clearAll(){
        setAssunto("")
        setPrioridade("")
        setCategoria("")
        setDescricao("")
        setAnexos([])
    }

    async function CreateCalled(){
        api.post('/api/service-calls')
    }

    return (
        <main className="flex items-start size-full bg-[#F6F9FC]">
            <SideBar 
                text="Mini Suap"
            />
            <aside className="size-full">
                <Navbar />
                <div className="p-4 space-y-2">
                    <div>
                        <h1 className="font-bold text-3xl">Novo Chamado</h1>
                        <h2 className="text-[#797979]">Como podemos te ajudar hoje?</h2>
                    </div>
                    <div className="border-2 border-border flex flex-col p-8 rounded-lg">
                        <h1>Detalhes do Chamado</h1>
                        <div className="grid sm:grid-cols-2 grid-cols-1 p-4 gap-4">
                            <div className="w-full flex flex-col col-span-2">
                                <label htmlFor="assunto">Assunto</label>
                                <input id="assunto" type="text" placeholder="Breve descrição do problema" className="bg-[#EDEDED] p-2 rounded-sm" value={assunto} onChange={
                                    (event) => setAssunto(event.target.value)
                                }/>
                            </div>
                            <div className="w-full flex flex-col">
                                <label htmlFor="prioridade">Prioridade</label>
                                <select id="prioridade" className="bg-[#EDEDED] p-2 rounded-sm" value={prioridade} onChange={
                                    (event) => setPrioridade(event.target.value)
                                }>
                                    <option value="" disabled>Selecione uma opção</option>
                                    <option value="baixa">Baixa</option>
                                    <option value="normal">Normal</option>
                                    <option value="alta">Alta</option>
                                    <option value="urgente">Urgente</option>
                                    </select>
                            </div>
                            <div className="w-full flex flex-col">
                                <label htmlFor="categoria">Categoria</label>
                                <select  id="categoria" className="bg-[#EDEDED] p-2 rounded-sm" value={categoria} onChange={
                                    (event) => setCategoria(event.target.value)
                                }>
                                    <option value="" disabled>Selecione uma opção</option>
                                    <option value="Redes">Redes</option>
                                    <option value="Sistemas Operacionais">Sistemas Operacionais</option>
                                    <option value="Software de Gestão">Software de Gestão</option>
                                    <option value="Hardware">Hardware</option>
                                    <option value="Impressoras">Impressoras</option>
                                </select>
                            </div>
                             <div className="w-full flex flex-col col-span-2">
                                <label htmlFor="descricao">Descrição</label>
                                <textarea id="descricao" placeholder="Forneça informações detalhadas sobre sua solicitação ou problema" className="bg-[#EDEDED] p-2 rounded-sm min-h-32" value={descricao} onChange={
                                    (event) => setDescricao(event.target.value)
                                }/>
                            </div>
                             <div className="w-full flex flex-col col-span-2">
                                <label htmlFor="anexos">Anexos

                                <div className="p-2 rounded-sm min-h-32 border-2 gap-2 border-dashed border-border items-center rounded-b-sm justify-center flex flex-col">
                                    <LucideUpload size={40}/>
                                    <h2>Clique para adicionar arquivos</h2>
                                </div>
                                <input type="file" accept="image/*" id="anexos" hidden />
                                </label>
                            </div>

                            <div className="col-span-2 flex flex-row justify-end gap-4 w-full">
                                <button className="border-2 rounded-lg p-2 border-border" onClick={clearAll}>Cancelar</button>
                                <button className="bg-background text-white p-2 rounded-lg">Criar chamado</button>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

        </main>
    )
}

