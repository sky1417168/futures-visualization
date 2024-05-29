import React from "react";

import Chart from "../../components/Chart";


const style = {
    width: '90%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr ',
    gridGap: '10px',
    padding: '10px',
    margin: '10px 100px',
    boxSizing: 'border-box',
}


const BlackRbSupply =  () => {
    return (
        <div>        
            <div style={style}>
                <Chart title='进出口图1'/>
                <Chart  title='进出口图2'/>
                <Chart  title='进出口图3'/>
                <Chart  title='进出口图4'/>
            </div>
        </div>

    )
}

export default BlackRbSupply;