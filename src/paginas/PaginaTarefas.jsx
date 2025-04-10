import { useNavigate, useSearchParams } from "react-router-dom"
import Titulo from "../componentes/Titulo";
import { ChevronLeftIcon } from "lucide-react";

function PaginaTarefas() {
    const [parametros] = useSearchParams();
    const titulo = parametros.get('titulo');
    const descricao = parametros.get('descricao');
    const navegacao = useNavigate();
    return (
        <div className="h-screen w-screen bg-slate-500 p-6">
            <div className="w-[500px] space-y-4 mx-auto">
                <div className="flex justify-center relative">
                    <button onClick={() => navegacao(-1)} className="absolute left-0 bottom-0 text-white">
                        <ChevronLeftIcon />
                    </button>
                    <Titulo>Detalhes da Tarefa</Titulo>
                </div>
                <div className="bg-slate-400 p-4 rounded-md">
                    <h2 className="text-xl text-white font-bold">{titulo}</h2>
                    <p className="text-white">{descricao}</p>
                </div>
            </div>
        </div>
    )
}

export default PaginaTarefas