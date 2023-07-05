import './App.css';
import NavBar from './componentes/NavBar/Navbar';
import ItemListContainer from './componentes/itemListContainer/itemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos a ByFan Mangas'}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
