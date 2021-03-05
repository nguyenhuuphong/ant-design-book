import React, { Component } from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
class Cart extends Component {
    render(){
      const { items } = this.props;
      return(
        <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src={ items.image.src}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={this.props.items.title}
          description={this.props.items.tags}
        />
      </Card>
      );
    }
    }
    export default Cart;