import { LucideCircleAlert, LucideUserRound } from "lucide-react";
import { SideBar } from "../../../assets/components/SideBar";
import { CardTop } from "../../../assets/components/card";
import { TableTop } from "./components/TableTop";
import { Navbar } from "../../../assets/components/Navbar";
import { useEffect, useState } from "react";
import api from "../../lib/api";
import { isAxiosError } from "axios";

function useDashboardData(){
    const [isLoadingAllCalls, setIsLoadingAllCalls] = useState(false)
    const [allCalls, setAllCalls] = useState<number | null>(null)
    const [errorAllCalls, setErrorAllCalls] = useState<string | null>(null)

    const loadAllCalls = async () => {
        setIsLoadingAllCalls(true)
        try{
            const res = await api.get('/service-calls/getAllCalls')
            return setAllCalls(res.data)
        }
        catch(err:unknown){
            if(isAxiosError(err) && err.response?.data){
                setErrorAllCalls(err.response.data.message)
            }
        }finally{
            setIsLoadingAllCalls(false)
        }
    }

    const [isLoadingOpenedCalls, setIsLoadingOpenedCalls] = useState(false)
    const [openedCalls, setOpenedCalls] = useState<number | null>(null)
    const [errorOpenedCalls, setErrorOpenedCalls] = useState<string | null>(null)

    const loadOpenedCalls = async () => {
        setIsLoadingOpenedCalls(true)
        try{
            const res = await api.get('/service-calls/getOpenedCalls')
            return setOpenedCalls(res.data)
        }
        catch(err:unknown){
            if(isAxiosError(err) && err.response?.data){
                setErrorOpenedCalls(err.response.data.message)
            }
        }finally{
            setIsLoadingOpenedCalls(false)
        }
    }

    const [isLoadingInProgressCalls, setIsLoadingInProgressCalls] = useState(false)
    const [inProgressCalls, setInProgressCalls] = useState<number | null>(null)
    const [errorInProgressCalls, setErrorInProgressCalls] = useState<string | null>(null)

    const loadInProgressCalls = async () => {
        setIsLoadingInProgressCalls(true)
        try{
            const res = await api.get('/service-calls/getInProgressCalls')
            return setInProgressCalls(res.data)
        }
        catch(err:unknown){
            if(isAxiosError(err) && err.response?.data){
                setErrorInProgressCalls(err.response.data.message)
            }
        }finally{
            setIsLoadingInProgressCalls(false)
        }
    }

    useEffect(() => {
        loadAllCalls()
        loadOpenedCalls()
        loadInProgressCalls()
    },[])

    return {
        allCalls, 
        isLoadingAllCalls, 
        errorAllCalls, 
        openedCalls, 
        isLoadingOpenedCalls, 
        errorOpenedCalls,
        inProgressCalls,
        isLoadingInProgressCalls,
        errorInProgressCalls
    }
}


export function Dashboard (){

    const {allCalls, openedCalls, inProgressCalls} = useDashboardData()

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
                            value={String(allCalls || 0)}
                            description="+12% comparado ao último mês"
                        />
                        <CardTop 
                            className="bg-white"
                            icon={LucideUserRound}
                            text="Chamados Abertos"
                            value={String(openedCalls || 0)}
                            description="-7% comparado ao último mês"
                        />
                        <CardTop 
                            className="bg-white"
                            icon={LucideUserRound}
                            text="Resolvidos Hoje"
                            value="0"
                            description="+8% comparado ao último mês"
                        />
                        <CardTop 
                            className="bg-white"
                            icon={LucideUserRound}
                            text="Chamados em andamento"
                            value={String(inProgressCalls || 0)}
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