import {CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Botao from "./Botao";

function Tarefas({tarefas, tarefaClicada, tarefaDeletada}) {
    const navegacao = useNavigate();

    function detalhesClick(tarefas) {
        const query = new URLSearchParams();
        query.set("titulo", tarefas.nome);
        query.set("descricao", tarefas.descricao);
        navegacao(`/tarefas?${query.toString()}`)
    }
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tarefas.map((tarefas) => (
                <li key={tarefas.id} className="flex gap-2">
                <button 
                onClick={() => tarefaClicada(tarefas.id)}
                className={` flex gap-2 bg-slate-400 w-full text-left text-white p-2 rounded-md w- ${tarefas.concluido && 'line-through'}`}>
                    {tarefas.concluido && <CheckIcon />}
                    {tarefas.nome}
                </button>

                <Botao onClick={() => detalhesClick(tarefas)}>
                    <ChevronRightIcon />
                </Botao>

                <Botao onClick={() => tarefaDeletada(tarefas.id)}>
                    <TrashIcon />
                </Botao>
                </li>
            ))}
        </ul>
    );
}

export default Tarefas;