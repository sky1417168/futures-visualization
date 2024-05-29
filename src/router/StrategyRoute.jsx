import React from 'react';
import { Route,Routes} from 'react-router-dom';
import Chart from '../components/Chart';
import StrategyCard from '../pages/strategy/StrategyCard';

const FarmRoute = () => {

    return (
        <Routes>
        <Route path='/' element={<StrategyCard />}/>
        <Route path='test' element={<Chart/>}/>
        
        </Routes>
    )
};

export default FarmRoute;