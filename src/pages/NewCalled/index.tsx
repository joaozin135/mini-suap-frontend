import { SideBar } from "../../../assets/components/SideBar";
import { Navbar } from "../../../assets/components/Navbar";
import { LucideUpload } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../lib/api";
import { isAxiosError } from "axios";

interface Categoria {
    id:string;
    name:string;
    description: string;
}
function useCategorias(){
    const [isLoading, setIsLoading] = useState(false)
    const [categoriasExistentes, setCategoriasExistentes] = useState<Array<Categoria>>([])
    const [error, setError] = useState<string | null>(null)

    const loadCategorias = async () => {
        setIsLoading(true)
        try{
            const res = await api.get('/categories')
            return setCategoriasExistentes(res.data)
        }
        catch(err:unknown){
            if(isAxiosError(err) && err.response?.data){
                setError(err.response.data.message)
            }
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadCategorias()
    },[])

    return {categoriasExistentes, isLoading, error}
}
export function NewCalled() {


    const {categoriasExistentes, isLoading:isLoadingCategorias, error: errorOnLoadCategories} = useCategorias()

    const [assunto, setAssunto] = useState<string>("");
    const [prioridade, setPrioridade] = useState<string>("");
    const [categoria, setCategoria] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [anexos, setAnexos] = useState<Array<File>>([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function clearAll() {
        setAssunto("");
        setPrioridade("");
        setCategoria("");
        setDescricao("");
        setAnexos([]);
    }

    async function createCalled() {
        setLoading(true);

        const token = localStorage.getItem("accessToken");
        if (!token) {
            alert("Usuário não autenticado. Faça login novamente.");
            return;
        }

        try {
            const response = await fetch("http://localhost:3001/service-calls", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    title: assunto,
                    priority: prioridade,
                    categoryId: categoria,
                    description: descricao,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.message || "Erro ao criar chamado");
            }

            alert("Chamado criado com sucesso!");
            navigate("/chamados");

        } catch (err: any) {
            alert(err.message || "Erro inesperado");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="flex items-start size-full bg-[#F6F9FC]">
            <SideBar text="Mini Suap" />
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
                                <input
                                    id="assunto"
                                    type="text"
                                    placeholder="Breve descrição do problema"
                                    className="bg-[#EDEDED] p-2 rounded-sm"
                                    value={assunto}
                                    onChange={(event) => setAssunto(event.target.value)}
                                />
                            </div>

                            <div className="w-full flex flex-col">
                                <label htmlFor="prioridade">Prioridade</label>
                                <select
                                    id="prioridade"
                                    className="bg-[#EDEDED] p-2 rounded-sm"
                                    value={prioridade}
                                    onChange={(event) => setPrioridade(event.target.value)}
                                >
                                    <option value="" disabled>Selecione uma opção</option>
                                    <option value="baixa">Baixa</option>
                                    <option value="normal">Normal</option>
                                    <option value="alta">Alta</option>
                                    <option value="urgente">Urgente</option>
                                </select>
                            </div>

                            {isLoadingCategorias ? <h3>Carregando categorias...</h3>: errorOnLoadCategories ? <h3>Erro ao carregar categorias...</h3> :
                            <div className="w-full flex flex-col">
                                <label htmlFor="categoria">Categoria</label>
                                <select
                                    id="categoria"
                                    className="bg-[#EDEDED] p-2 rounded-sm"
                                    value={categoria}
                                    onChange={(event) => setCategoria(event.target.value)}
                                >
                                    <option value="" disabled>Selecione uma opção</option>
                                    {categoriasExistentes.map((categoria) => {
                                        return <option value={categoria.id}>{categoria.name}</option>
                                    })}
                                </select>
                            </div>
                            }

                            <div className="w-full flex flex-col col-span-2">
                                <label htmlFor="descricao">Descrição</label>
                                <textarea
                                    id="descricao"
                                    placeholder="Forneça informações detalhadas sobre sua solicitação ou problema"
                                    className="bg-[#EDEDED] p-2 rounded-sm min-h-32"
                                    value={descricao}
                                    onChange={(event) => setDescricao(event.target.value)}
                                />
                            </div>

                            <div className="w-full flex flex-col col-span-2">
                                <label htmlFor="anexos">
                                    Anexos
                                    <div className="p-2 rounded-sm min-h-32 border-2 gap-2 border-dashed border-border items-center justify-center flex flex-col">
                                        <LucideUpload size={40} />
                                        <h2>Clique para adicionar arquivos</h2>
                                    </div>
                                    <input type="file" accept="image/*" id="anexos" hidden />
                                </label>
                            </div>

                            <div className="col-span-2 flex flex-row justify-end gap-4 w-full">
                                <button className="border-2 rounded-lg p-2 border-border" onClick={clearAll}>
                                    Cancelar
                                </button>
                                <button
                                    className="bg-background text-white p-2 rounded-lg"
                                    onClick={createCalled}
                                >
                                    {loading ? "Criando chamado..." : "Criar Chamado"}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </aside>
        </main>
    );
}
