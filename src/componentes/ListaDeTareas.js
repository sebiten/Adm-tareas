import React, {  useState } from 'react';
import TareaFormulario from './TareaFormulario';
import '../style/ListaDeTareas.css';
import Tarea from './Tarea'

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    console.log(tarea);
    if(tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareaActualizadas = [tarea, ...tareas];
      setTareas(tareaActualizadas);

    }
  };
  const eliminarTarea = id => {
    const tareaActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareaActualizadas);
  }
  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };
  

    return (
      <>
        <TareaFormulario onSubmit={agregarTarea}/>
        <div className='tareas-lista-contenedor'>
          {
            tareas.map((tareas) =>
              <Tarea
                key={tareas.id}
                id={tareas.id}
                texto={tareas.texto}
                completada={tareas.completada}
                eliminarTarea={eliminarTarea}
                completarTarea={completarTarea}
              />
            )
          }
        </div>
      </>

    );
}

export default ListaDeTareas;