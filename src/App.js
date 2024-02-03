import './App.css';
import affiche from './Kiwanis_affiche_concours_photo_31012024VF.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Concours Photos Kiwanis 2024- Revenez le 15 Février
        </p>
      
        <img src={affiche} className="Affiche" alt="affiche" />
      </header>
    </div>
  );
}

export default App;
