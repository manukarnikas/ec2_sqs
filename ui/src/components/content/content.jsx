import { useState } from 'react';
import { Layout, Input, Button, Space } from 'antd';
import './content.css';

const { Content } = Layout;

const { TextArea } = Input;

const ContentComponent = (props)=>{
    const { publishMessage } = props;

    const [text,setText] = useState("");

    const onChange = (e)=>{
        setText(e.target.value);
    }

    const clearText = ()=>{
        setText("");
    }

    return (
        <Content className="content">
            <TextArea rows={4} value={text} onChange={(e)=>onChange(e)} placeholder="Enter text to publish to SQS" maxLength={100} />
            <br />
            <br />
            <Space size={"small"} direction="horizaontal">
            <Button type="primary" disabled={!text?.length} onClick={()=>publishMessage(text)}>Publish</Button>
            <Button type="primary" danger disabled={!text?.length} onClick={()=>clearText()}>Clear</Button>
            </Space>
        </Content>
    );
}

export default ContentComponent;