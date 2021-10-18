import { BrowserRouter } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/Shared/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
