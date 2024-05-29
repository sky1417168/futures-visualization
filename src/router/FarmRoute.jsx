import React from 'react';
import { Route,Routes} from 'react-router-dom';
import Chart from '../components/Chart';
import FarmCard from '../pages/farm/FarmCard';

const FarmRoute = () => {

    return (
        <Routes>
        <Route path='/' element={<FarmCard/>}/>
        <Route path='test' element={<Chart/>}/>
        
        </Routes>
    )
};

export default FarmRoute;