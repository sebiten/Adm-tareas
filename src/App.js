import './App.css';
import freecodecamplogo from './img/freecodecamp-logo.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo'>
        <img 
        src={freecodecamplogo}
        className='freecodecamp-logo'
        alt='freecodecamplogo'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
