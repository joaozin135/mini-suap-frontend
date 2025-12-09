import { LucideLogOut, LucideSearch, LucideUserRound } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white shadow p-2">
      <div className="flex items-center bg-[#F4F4F4] rounded-lg gap-2 p-2 ">
        <LucideSearch size={22}/>
        <input type="text" placeholder="Buscar Chamados"/>
      </div>

      <div id="card" className="flex flex-col rounded-2xl w-fit items-center">
        <div id="card-header" className="p-3 flex items-center gap-3">          
          <div className="flex flex-col items-end">
            <h1 className="text-lg font-medium">Admin User</h1>
            <h3>Admin</h3>
          </div>
          <div id="card-icon" className="p-2 rounded-full bg-[#D9D9D9]">
            <LucideUserRound size={28} />
          </div>
          <button>
            <LucideLogOut />
          </button>
        </div>
      </div>
    </nav>
  );
}
