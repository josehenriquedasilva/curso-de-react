import { useEffect, useState } from "react";
import AddTarefas from "./componentes/AddTarefas";
import Tarefas from "./componentes/Tarefas";
import { v4 } from "uuid";
import Titulo from "./componentes/Titulo";

function App() {
  const [tarefas, setTarefas] = useState(() => {
    const storedTarefas = localStorage.getItem("tarefas");
    return storedTarefas ? JSON.parse(storedTarefas) : [];
  });

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function tarefaClicada(tarefasId) {
    const novaLista = tarefas.map(tarefas => {
      if (tarefas.id === tarefasId) {
        return {...tarefas, concluido: !tarefas.concluido}
      }
      return tarefas
    });
    setTarefas(novaLista);
  };

  function tarefaDeletada(tarefasId) {
    const novaLista = tarefas.filter(tarefas => tarefas.id != tarefasId);
    setTarefas(novaLista);
  };

  function tarefaAdicionada(nome, descricao) {
    const novaLista = {
      id: v4(), 
      nome,
      descricao,
      concluido: false
    };
    setTarefas([...tarefas, novaLista]);
  };

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
      <Titulo>Gerenciador de Tarefas</Titulo>
      <AddTarefas 
      tarefaAdicionada={tarefaAdicionada}
      />
      <Tarefas
      tarefas={tarefas}
      tarefaClicada={tarefaClicada} 
      tarefaDeletada={tarefaDeletada}
      />
      </div>
    </div>
  );
}

export default App;