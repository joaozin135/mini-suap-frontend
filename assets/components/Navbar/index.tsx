import { LucideUserRound, type LucideIcon } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex justify-end items-center">
      <div id="card" className=" flex flex-col rounded-2xl w-fit">
        <div id="card-header" className="p-3 flex items-center gap-3">
          <div id="card-icon" className="p-2 rounded-full bg-[#D9D9D9]">
            <LucideUserRound size={22} />
          </div>
          <h1 className="text-lg font-medium">user</h1>
        </div>
      </div>
    </nav>
  );
}
