import React from "react";
import Card from '../../components/Card';
import {Col, Row, Divider} from 'antd'
import { Link } from 'react-router-dom';
import car1 from '../../assets/cars/car-1.jpg'
import car2 from '../../assets/cars/car-2.jpg'
import car3 from '../../assets/cars/car-3.jpg'
import car4 from '../../assets/cars/car-4.jpg'
import car5 from '../../assets/cars/car-5.jpg'
import car6 from '../../assets/cars/car-6.jpg'
import car7 from '../../assets/cars/car-7.jpg'
import car8 from '../../assets/cars/car-8.jpg'
import car9 from '../../assets/cars/car-9.jpg'
import car10 from '../../assets/cars/car-10.jpg'


const Black = () => {
 
    const gridStyle = {
        margin: '40px 400px',
    };

    return(
        <>
        <Divider>基差</Divider>
        <Row gutter={[16,32]} style={gridStyle}>
            <Col><Link to='/black/rb-supply'><Card title='供给' description='都是折线图' img={car1}/></Link></Col>
            <Col><Link to='/black/rb-repertory'><Card title='库存' description='都是折线图' img={car2}/></Link></Col>
            <Col><Link to='/black/rb-cost'><Card title='价本利' description='都是折线图' img={car3}/></Link></Col>
            <Col><Link to='/black/rb-need'><Card title='需求' description='都是折线图' img={car4}/></Link></Col>
            <Col><Link to='/black/rb-in-out'><Card title='进出口' description='都是折线图' img={car5}/></Link></Col>
        </Row>
        <Divider>库存</Divider>
        <Row gutter={[16,32]} style={gridStyle}>
            <Col><Link to='/black/hc-supply'><Card title='供给' description='都是折线图' img={car6}/></Link></Col>
            <Col><Link to='/black/hc-repertory'><Card title='库存' description='都是折线图' img={car7}/></Link></Col>
            <Col><Link to='/black/hc-need'><Card title='需求' description='都是折线图' img={car8}/></Link></Col>
            <Col><Link to='/black/hc-in-out'><Card title='进出口数量合计' description='都是折线图' img={car9}/></Link></Col>
            <Col><Link to='/black/hc-cost'><Card title='价本利' description='都是折线图' img={car10}/></Link></Col>
        </Row>
        <Divider>利润</Divider>
        <Row gutter={[16,32]} style={gridStyle}>
            <Col><Link to='/black/hc-supply'><Card title='供给' description='都是折线图' img={car6}/></Link></Col>
            <Col><Link to='/black/hc-repertory'><Card title='库存' description='都是折线图' img={car7}/></Link></Col>
            <Col><Link to='/black/hc-need'><Card title='需求' description='都是折线图' img={car8}/></Link></Col>
            <Col><Link to='/black/hc-in-out'><Card title='进出口数量合计' description='都是折线图' img={car9}/></Link></Col>
            <Col><Link to='/black/hc-cost'><Card title='价本利' description='都是折线图' img={car10}/></Link></Col>
        </Row>
          

        </>
    )
}
;


export default Black;