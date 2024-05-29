import React from 'react';
import { Route,Routes} from 'react-router-dom';
import Chart from '../components/Chart';
import SectionCard from '../pages/section/SectionCard';

const FarmRoute = () => {

    return (
        <Routes>
        <Route path='/' element={<SectionCard />}/>
        <Route path='test' element={<Chart/>}/>
        
        </Routes>
    )
};

export default FarmRoute;