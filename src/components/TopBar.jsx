import React, { useState } from 'react';
import { RadarChartOutlined, StockOutlined, BarChartOutlined , RiseOutlined,FundOutlined,PieChartOutlined} from '@ant-design/icons';
import { Menu  } from 'antd';
import { useNavigate } from 'react-router-dom';


const items = [
  {
    label: '黑色',
    key: 'black',
    icon: <StockOutlined />,
  },
  {
    label: '农产品',
    key: 'farm',
    icon: <FundOutlined />,
  },
  {
    label: '化工',
    key: 'chemical',
    icon: <PieChartOutlined />,
  },
  {
    label: '宏观数据',
    key: 'macro',
    icon: <BarChartOutlined />,
  },
  {
    label: '截面数据',
    key: 'section',
    icon: <RiseOutlined />,
  },
  {
    label: '策略监控',
    key: 'strategy',
    icon: <RadarChartOutlined />,
  },
];





const TopBar = () => {
  const [current, setCurrent] = useState('black');

  const navigate = useNavigate();


  const onClick = (e) => {
    setCurrent(e.key);
    navigate(`/${e.key}`);

  };

  const TopBarStyles = {
    marginLeft: '800px'
  }

  return (

    <div style={TopBarStyles}>

        <Menu onClick={onClick} selectedKeys={[current]}   mode="horizontal" items={items}  />
    </div>
  
  );
};


export default TopBar;