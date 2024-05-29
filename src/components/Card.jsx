import React from 'react';
import { Card } from 'antd';
import img from '../assets/room.jpg'

const { Meta } = Card;

const MyCard = (prop) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={prop.img || img} />}
  >
    <Meta title={prop.title || '默认标题'} description={prop.description || '默认描述'} />
  </Card>
);
export default MyCard;