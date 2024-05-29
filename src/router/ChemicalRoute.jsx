import React from 'react';
import { Route,Routes} from 'react-router-dom';
import Chart from '../components/Chart';
import ChemicalCard from '../pages/chemical/ChemicalCard';

const FarmRoute = () => {

    return (
        <Routes>
        <Route path='/' element={<ChemicalCard />}/>
        <Route path='test' element={<Chart/>}/>
        
        </Routes>
    )
};

export default FarmRoute;