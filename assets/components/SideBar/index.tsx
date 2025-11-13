import { LucideHouse, LucidePhone, LucideSquareChartGantt } from "lucide-react"
import { ButtonMassa } from "../Button"


interface SideBarProps {
    text: string;
}

export function SideBar({ text }: SideBarProps){
    return(
        <aside className="bg-[#1C385B] size-full min-h-dvh flex flex-col gap-8 max-w-72 text-white p-4">
                <h1 className="font-semibold text-3xl text-center">{text}</h1>
                <article className="flex flex-col gap-4 items-start">
                    <div id="buttons-side">
                        <ButtonMassa
                            icon={LucideHouse}
                            text="Dashboard"
                            to="/"
                        />
                        <ButtonMassa 
                            icon={LucidePhone}
                            text="Chamados"
                            to="/chamados"
                        />
                        <ButtonMassa 
                            icon={LucideSquareChartGantt}
                            text="Relatórios"
                            to="/relatorios"
                        />
                    </div>
                </article>
            </aside>
    )
}