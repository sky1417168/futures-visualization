import React from 'react';
import { Route,Routes} from 'react-router-dom';
import BlackCards from '../pages/black/BlackCards';
import Chart from '../components/Chart';
import BlackRbSupply from '../pages/black/BlackRbSupply';
import BlackRepertory from '../pages/black/BlackRepertory';
import BlackRbCost from '../pages/black/BlackRbCost';
import BlackRbNeed from '../pages/black/BlackRbNeed';
import BlackRbInOut from '../pages/black/BlackRbInOut';

const BlackRoute = () => {

    return (
        <Routes>
        <Route path='/' element={<BlackCards />}/>
        {/* 螺纹钢 */}
        <Route path='rb-supply' element={<BlackRbSupply/>}/>
        <Route path='rb-repertory' element={<BlackRepertory/>}/>
        <Route path='rb-cost' element={<BlackRbCost/>}/>
        <Route path='rb-need' element={<BlackRbNeed/>}/>
        <Route path='rb-in-out' element={<BlackRbInOut/>}/>

        {/* 热卷 */}
        <Route path='hc-supply' element={<Chart/>}/>
        <Route path='hc-repertory' element={<Chart/>}/>
        <Route path='hc-cost' element={<Chart/>}/>
        <Route path='hc-need' element={<Chart/>}/>
        <Route path='hc-in-out' element={<Chart/>}/>

        
        </Routes>
    )
};

export default BlackRoute;
