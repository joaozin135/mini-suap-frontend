import { LucideCircleCheck, LucideSquarePen, LucideTrash } from "lucide-react";
import { Navbar } from "../../../assets/components/Navbar";
import { SideBar } from "../../../assets/components/SideBar";
import { useEffect, useState } from "react";
import { isAxiosError } from "axios";
import api from "../../lib/api";

interface ICall {
  id: string;
  code: string; // Ex: HD-001
  title: string; // Ex: Problemas com Dispositivo Móvel
  description?: string;
  status: string;
  createdAt: string;
}

function useCalls() {
  const [isLoadingCalls, setIsLoadingCalls] = useState(false);
  const [chamadosExistentes, setChamadosExistentes] = useState<ICalls[]>([]);
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

  return { chamadosExistentes, errorCalls, isLoadingCalls };
}

export function Called() {
  const { chamadosExistentes, errorCalls, isLoadingCalls } = useCalls();

  return (
    <main className="flex items-start size-full bg-[#F6F9FC]">
      <SideBar text="Mini Suap" />
      <aside className="size-full">
        <Navbar />
        <div className="p-4">
          <div className="">
            <h1 className="font-bold text-3xl">Chamados</h1>
            <h2 className="text-[#797979]">Chamados abertos recentemente</h2>
          </div>

          <div className="bg-white w-full flex flex-col p-8 space-y-4 rounded-lg border-border border-2">
            {!isLoadingCalls && !errorCalls && (
              <div className="text-2xl">
                {chamadosExistentes.length} Chamado
                {chamadosExistentes.length !== 1 ? "s" : ""}
              </div>
            )}
            {chamadosExistentes.map((call) => (
              <div key={call.id} className="border border-border rounded-lg">
                <div className="p-4">
                    <div className=" grid grid-cols-5 justify-between">
                        <div >
                            <h1 className="text-xl">{call.title}</h1>
                        </div>
                        <h2 className="text-border text-lg">{call.code}</h2>
                        <div className="bg-blue-300 text-blue-800 rounded-md p-2 col-span-1">
                            <h1>{call.priority}</h1>
                        </div>

                        <h2></h2>

                        <div className="rounded-md p-2 bg-amber-500 col-spam-end">
                            <h1>{call.category?.name}</h1> 
                        </div>
                    </div>
                  <p className="text-lg text-[#797979]">{call.description}</p>
                  
                </div>

                <div className="flex justify-center p-4 gap-10">
                  <button>
                    <LucideSquarePen size={32} />
                  </button>
                  <button>
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
