import { LucideBell, LucideLogOut, LucideUserRound, LucideSearch, type LucideIcon } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex justify-between gap-2 items-center bg-white p-2">
      <div className="flex flex-row items-center bg-[#F4F4F4] relative max-w-lg size-full rounded-lg overflow-hidden">
          <LucideSearch size={18} className="absolute left-2 shrink-0"/>
          <input type="text" placeholder="Buscar Chamados" className="size-full p-2 pl-8 rounded-lg"/>
        </div>
        <div id="card" className=" flex flex-col rounded-2xl w-fit">
        
        <div id="card-header" className="p-3 flex items-center gap-3">
          <LucideBell size={22}/>
          <div className="text-right">
            <h1 className="text-lg font-light">Admin User</h1>
            <h2 className="font-light text-[#B4B4B4]">Admin</h2>
          </div>
          <div id="card-icon" className="p-2 rounded-full bg-[#D9D9D9]">
            <LucideUserRound size={22} />
          </div>
           <LucideLogOut size={22}/>
        </div>
      </div>
    </nav>
  );
}
