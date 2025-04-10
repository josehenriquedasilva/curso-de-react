import {CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Botao from "./Botao";

function Tarefas({tarefas, tarefaClicada, tarefaDeletada}) {
    const navegacao = useNavigate();

    function detalhesClick(tarefa) {
        const query = new URLSearchParams();
        query.set("titulo", tarefa.nome);
        query.set("descricao", tarefa.descricao);
        navegacao(`/tarefas?${query.toString()}`)
    }
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tarefas.map((tarefa) => (
                <li key={tarefa.id} className="flex gap-2">
                <button 
                onClick={() => tarefaClicada(tarefa.id)}
                className={` flex gap-2 bg-slate-400 w-full text-left text-white p-2 rounded-md w- ${tarefa.concluido && 'line-through'}`}>
                    {tarefa.concluido && <CheckIcon />}
                    {tarefa.nome}
                </button>

                <Botao onClick={() => detalhesClick(tarefa)}>
                    <ChevronRightIcon />
                </Botao>

                <Botao onClick={() => tarefaDeletada(tarefa.id)}>
                    <TrashIcon />
                </Botao>
                </li>
            ))}
        </ul>
    );
}

export default Tarefas;