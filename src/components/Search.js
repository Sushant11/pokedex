import React from 'react';
import { Form, Input, Button, Card, Radio, Row, Col } from 'antd';

import pokeball from '../assets/pokeball.png'

const layout = {
    wrapperCol: {
        span: 24,
    },
};

function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
}


const Search = () => {
    return (
        <Card bordered='false' className='searchCard'>
            <Form
                {...layout}
                name="basic"
                placeholder="Search"
                initialValues={{
                    remember: true,
                }}
            >
                <Form.Item
                    name="poke"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Row>
                        <Col span={18}> <Input placeholder="Find"/></Col>
                        <Col span={4} offset={2}>
                            <Button className="poke-btn" type="primary" htmlType='submit'>Search</Button>
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item
                    name="para"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Radio.Group onChange={onChange} defaultValue="a">
                        <Radio.Button value="a">Name</Radio.Button>
                        <Radio.Button value="b">Gender</Radio.Button>
                        <Radio.Button value="c">Color</Radio.Button>
                        <Radio.Button value="d">Habitat</Radio.Button>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default Search;