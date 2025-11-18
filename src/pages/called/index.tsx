import { SideBar } from "../../../assets/components/SideBar"

export function Called(){
    return(
        <main className="flex items-start size-full bg-[#F6F9FC]">
            <SideBar text="Mini Suap"/>
            <aside className="size-full p-4">
                <nav className="flex justify-end items-center">
                    <div id="button-new-called" className="flex flex-col rounded-2xl w-fit">
                        <button>+ Novo chamado</button>
                    </div>
                </nav>
                
                   
            </aside>
        </main>
    )
}