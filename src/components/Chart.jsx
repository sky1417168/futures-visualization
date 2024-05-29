import React from 'react';
import { Line } from '@ant-design/plots';
import {Card} from 'antd'

const style = {
    width: '900px',
    // height: '400px',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 20px'
  
}


const DemoLine = (prop) => {

  const config = {
    data: {
      type: 'fetch',
      value: prop.value || 'https://assets.antv.antgroup.com/g2/indices.json',
    },
    xField:  prop.x ||((d) => new Date(d.Date)),
    yField: prop.y ||'Close',
    colorField: prop.color || 'Symbol',
    normalize: { basis: 'first', groupBy: 'color' },
    scale: {
      y: { type: 'log' },
    },
    axis: {
      y: { title: '↑ Change in price (%)' },
    },
    label: {
      text: 'Symbol',
      selector: 'last',
      style: {
        fontSize: 10,
      },
    },
    tooltip: { channel: 'y', valueFormatter: '.1f' },
  };
  return (
    <div style={style}>
      <Card title={prop.title ||"默认标题"}>
        <Line {...config} />
      </Card>
    </div>

  )
};

export default DemoLine;