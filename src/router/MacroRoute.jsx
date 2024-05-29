import React from 'react';
import { Route,Routes} from 'react-router-dom';
import Chart from '../components/Chart';
import MacroCard from '../pages/macro/MacroCard';

const MacroRoute = () => {

    return (
        <Routes>
            <Route path='/' element={<MacroCard/>}/>
            <Route path='test' element={<Chart/>}/>
            
        </Routes>
    )
};

export default MacroRoute;