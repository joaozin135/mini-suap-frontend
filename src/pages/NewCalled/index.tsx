import { SideBar } from "../../../assets/components/SideBar";
import { LucideUserRound } from "lucide-react";

export function NewCalled() {
  return (
    <main className="flex items-start size-full bg-[#F6F9FC]">
      <SideBar text="Mini Suap" />
      <aside className="size-full p-4">
        <nav className="flex justify-end items-center bg-white">
          <div id="card" className=" flex flex-col rounded-2xl w-fit">
            <div id="card-header" className="p-3 flex items-center gap-3">
              <div id="card-icon" className="p-2 rounded-full bg-[#D9D9D9]">
                <LucideUserRound size={22} />
              </div>
              <h1 className="text-lg font-medium">user</h1>
            </div>
          </div>
        </nav>
        <section className="space-y-12">
          <article className="space-y-8">
            <h1 className="font-bold text-3xl">Tela inicial</h1>
          </article>
        </section>
      </aside>
    </main>
  );
}
