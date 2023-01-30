import './App.css';
import Topbar from './components/topbar/Topbar';
import Sitebar from './components/sitebar/Sitebar';
import Home from './pages/home/Home';

function App() {
  return (
    <div >
      <Topbar/>
      <div className="container2">
        <Sitebar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
