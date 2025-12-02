import { LucideCirclePlus, LucideHouse, LucidePhone } from "lucide-react"
import { ButtonMassa } from "../Button"
import { useLocation } from "react-router-dom";


interface SideBarProps {
    text: string;
}

export function SideBar({ text }: SideBarProps){
    const {pathname} = useLocation()
    return(
        <aside className="bg-[#1C385B] size-full min-h-dvh flex flex-col gap-8 max-w-72 text-white p-4">
                <h1 className="font-semibold text-3xl text-center">{text}</h1>
                <article className="flex flex-col gap-4 items-start">
                    <div id="buttons-side">
                        <ButtonMassa
                            icon={LucideHouse}
                            text="Dashboard"
                            to="/dashboard"
                            data-active={pathname === "/dashboard"}
                            className="data-[active=true]:bg-white/10"
                        />
                        <ButtonMassa 
                            icon={LucidePhone}
                            text="Chamados"
                            to="/chamados"
                            data-active={pathname === "/chamados"}
                            className="data-[active=true]:bg-white/10"
                        />
                        <ButtonMassa 
                            icon={LucideCirclePlus}
                            text="Novo Chamado"
                            to="/novochamado"
                            data-active={pathname === "/novochamado"}
                            className="data-[active=true]:bg-white/10"
                        />
                    </div>
                </article>
            </aside>
    )
}