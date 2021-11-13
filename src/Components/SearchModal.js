import React, { useState } from 'react';
import { Modal, Button } from 'antd';

export default function SearchModal(){
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" style={{backgroundColor:"#F5A623",color:"black",fontWeight:"bold",fontSize:"16px"}} onClick={() => setVisible(true)}>
        Search Video
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};
