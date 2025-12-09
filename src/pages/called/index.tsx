import { LucideCircleCheck, LucideSquarePen, LucideTrash } from "lucide-react";
import { Navbar } from "../../../assets/components/Navbar";
import { SideBar } from "../../../assets/components/SideBar";
import { useEffect, useState } from "react";
import { isAxiosError } from "axios";
import api from "../../lib/api";

interface ICall {
  id: string;
  code: string;
  title: string;
  description?: string;
  status: string;
  createdAt: string;
  priority?: string;
  category?: { name: string };
}

function useCalls() {
  const [isLoadingCalls, setIsLoadingCalls] = useState(false);
  const [chamadosExistentes, setChamadosExistentes] = useState<ICall[]>([]);
  const [errorCalls, setErrorCalls] = useState<string | null>(null);

  const loadCalls = async () => {
    setIsLoadingCalls(true);
    try {
      const res = await api.get("/service-calls");
      return setChamadosExistentes(res.data.reverse());
    } catch (err: unknown) {
      if (isAxiosError(err) && err.response?.data) {
        setErrorCalls(err.response.data.message);
      }
    } finally {
      setIsLoadingCalls(false);
    }
  };

  useEffect(() => {
    loadCalls();
  }, []);

  const deleteCall = async (id: string) => {
    await api.delete(`/service-calls/${id}`);
    loadCalls();
  };

  return { chamadosExistentes, errorCalls, isLoadingCalls, deleteCall };
}

export function Called() {
  const { chamadosExistentes, errorCalls, isLoadingCalls, deleteCall } = useCalls();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="flex w-full min-h-screen bg-[#F6F9FC]">

     <div className="hidden md:block">
        <SideBar text="Mini Suap" />
      </div>

      {/* 🔥 Sidebar overlay mobile */}
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
      <aside className="flex-1 md:ml-64">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

        <div className="p-4 space-y-6">
          {/* Cabeçalho */}
          <div>
            <h1 className="font-bold text-2xl md:text-3xl">Chamados</h1>
            <h2 className="text-[#797979] text-sm md:text-base">
              Chamados abertos recentemente
            </h2>
          </div>

          {/* Container principal */}
          <div className="bg-white w-full flex flex-col p-6 md:p-8 space-y-4 rounded-lg border border-border">

            {!isLoadingCalls && !errorCalls && (
              <div className="text-xl md:text-2xl font-medium">
                {chamadosExistentes.length} Chamado
                {chamadosExistentes.length !== 1 ? "s" : ""}
              </div>
            )}

            {chamadosExistentes.map((call) => (
              <div
                key={call.id}
                className="border border-border rounded-lg bg-white shadow-sm"
              >
                <div className="p-4 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center">

                    <h1 className="text-xl font-semibold">{call.title}</h1>

                    <h2 className="text-border text-lg">{call.code}</h2>

                    <div className="bg-blue-200 text-blue-900 rounded-md p-2 text-center font-medium">
                      {call.priority || "—"}
                    </div>

                    <div></div>

                    <div className="bg-amber-500 text-white rounded-md p-2 text-center font-medium">
                      {call.category?.name || "Sem categoria"}
                    </div>
                  </div>

                  <p className="text-[#797979] text-lg">{call.description}</p>
                </div>

                <div className="flex justify-center p-4 gap-10">
                  <button>
                    <LucideSquarePen size={32} />
                  </button>

                  <button onClick={() => deleteCall(call.id)} type="button">
                    <LucideTrash size={32} />
                  </button>

                  <button>
                    <LucideCircleCheck size={32} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </main>
  );
}
