import './App.css';
import NavBar from './componentes/NavBar/Navbar';
import ItemListContainer from './componentes/itemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos a ByFan Mangas'}/>
    </div>
  );
}

export default App;
