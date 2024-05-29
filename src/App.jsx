import './App.css'
import TopBar from './components/TopBar';
import MyCard from './components/Card';
import { BrowserRouter as Router, Route, Routes ,Navigate} from 'react-router-dom';
import BlackRoute from './router/BlackRoute'
import FarmRoute from './router/FarmRoute'
import ChemicalRoute from './router/ChemicalRoute'
import MacroRoute from './router/MacroRoute'
import SectionRoute from './router/SectionRoute'
import StrategyRoute from './router/StrategyRoute'

const App = () => {
  return (
    <div>

      <Router>
        <TopBar/>
        <Routes>  
            <Route path='/' element={<Navigate to="/black" />}/>
            <Route path='/black/*' element={<BlackRoute/>}/>
            <Route path='/farm/*' element={<FarmRoute/>}/>
            <Route path='/chemical/*' element={<ChemicalRoute/>}/>
            <Route path='/macro/*' element={<MacroRoute/>}/>
            <Route path='/section/*' element={<SectionRoute/>}/>
            <Route path='/strategy/*' element={<StrategyRoute/>}/>
        </Routes>

      </Router>
    </div>
   );
};

export default App
