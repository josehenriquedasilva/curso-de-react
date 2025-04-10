import { useState } from "react";
import Input from "./Input";

function AddTarefas({tarefaAdicionada}) {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    
    return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
        <Input 
            type="text" 
            placeholder="Digite o título"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
        />
        <Input 
            type="text" 
            placeholder="Digite a descrição da tarefa" 
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
        />
        <button onClick={() => {
            if (!titulo.trim() || !descricao.trim()) {
                return alert("Erro");
            } else {
                tarefaAdicionada(titulo, descricao);
                setTitulo("");
                setDescricao("");
            }
            }} 
            className=" bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar</button>
    </div>
    );
}

export default AddTarefas;