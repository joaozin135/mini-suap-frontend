import { LucideLogOut, LucideMenu, LucideSearch, LucideUserRound } from "lucide-react";

export function Navbar({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <nav className="flex justify-between items-center bg-white shadow p-2">

      {/* MOBILE BUTTON (substitui a barra de pesquisa) */}
      <button
        className="md:hidden p-2 rounded-lg border border-gray-300"
        onClick={onMenuClick}
      >
        <LucideMenu size={26} />
      </button>

      {/* DESKTOP SEARCH BAR */}
      <div className="hidden md:flex items-center bg-[#F4F4F4] rounded-lg gap-2 p-2">
        <LucideSearch size={22} />
        <input
          type="text"
          placeholder="Buscar Chamados"
          className="bg-transparent outline-none"
        />
      </div>

      {/* USER CARD */}
      <div id="card" className="flex flex-col rounded-2xl w-fit items-center">
        <div id="card-header" className="p-3 flex items-center gap-3">
          <div className="flex flex-col items-end">
            <h1 className="text-lg font-medium">Admin User</h1>
            <h3 className="text-sm text-gray-500">Admin</h3>
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
