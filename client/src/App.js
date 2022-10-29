import logo from './logo.svg';
import './App.css';
import { MainRoutes } from './pages/MainRoutes';
import { Navbar } from './components/Navbar/Navbar';
import { Fotter } from './components/Footer/Fotter';

function App() {
  return (
    <div className='App'>
      <Navbar/>
    <MainRoutes/>
    <Fotter/>
    </div>
  );
}

export default App;
