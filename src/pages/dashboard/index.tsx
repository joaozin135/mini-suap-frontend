import { LucideCircleAlert, LucideUserRound } from "lucide-react";
import { SideBar } from "../../../assets/components/SideBar";
import { CardTop } from "../../../assets/components/card";
import { TableTop } from "./components/TableTop";
import { Navbar } from "../../../assets/components/Navbar";
import { useEffect, useState } from "react";
import api from "../../lib/api";
import { isAxiosError } from "axios";

function useDashboardData() {
  const [isLoadingAllCalls, setIsLoadingAllCalls] = useState(false);
  const [allCalls, setAllCalls] = useState<number | null>(null);

  const [isLoadingOpenedCalls, setIsLoadingOpenedCalls] = useState(false);
  const [openedCalls, setOpenedCalls] = useState<number | null>(null);

  const [isLoadingInProgressCalls, setIsLoadingInProgressCalls] = useState(false);
  const [inProgressCalls, setInProgressCalls] = useState<number | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoadingAllCalls(true);
        const all = await api.get("/service-calls/getAllCalls");
        setAllCalls(all.data);

        setIsLoadingOpenedCalls(true);
        const open = await api.get("/service-calls/getOpenedCalls");
        setOpenedCalls(open.data);

        setIsLoadingInProgressCalls(true);
        const prog = await api.get("/service-calls/getInProgressCalls");
        setInProgressCalls(prog.data);
      } catch (err: unknown) {
        if (isAxiosError(err)) console.log(err.response?.data);
      } finally {
        setIsLoadingAllCalls(false);
        setIsLoadingOpenedCalls(false);
        setIsLoadingInProgressCalls(false);
      }
    };

    load();
  }, []);

  return { allCalls, openedCalls, inProgressCalls };
}

export function Dashboard() {
  const { allCalls, openedCalls, inProgressCalls } = useDashboardData();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <main className="flex w-full min-h-screen bg-[#F6F9FC] relative">


      <div className="hidden md:block">
        <SideBar text="Mini Suap" />
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-opacity-40 z-40 md:hidden"
             onClick={() => setIsSidebarOpen(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute left-0 top-0 h-full w-64 bg-white shadow-xl z-50 animate-slideRight"
          >
            <SideBar text="Mini Suap" onClose={() => setIsSidebarOpen(false)} />
          </div>
        </div>
      )}

      <aside className="flex flex-col w-full">


        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

        <section className="p-4 space-y-6">
          <div>
            <h1 className="font-bold text-2xl md:text-3xl">Tela inicial</h1>
            <h2 className="text-[#797979] text-sm md:text-base">
              Bem vindo ao Mini Suap!
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
              description="+5% comparado à última semana"
            />
          </div>

          <article className="space-y-3">
            <h1 className="text-xl md:text-2xl font-semibold">Chamados recentes</h1>

            <div className="w-full overflow-x-auto rounded-lg">
              <TableTop />
            </div>
          </article>
        </section>
      </aside>
    </main>
  );
}
