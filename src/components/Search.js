import React from 'react';
import { Form, Input, Button, Card, Radio, Row, Col } from 'antd';
import Icon from '@ant-design/icons';
import pokeSvg from '../assets/pokeSvg';

const layout = {
    wrapperCol: {
        span: 24,
    },
};

const PokeballIcon = props => <Icon component={pokeSvg} {...props} />


const Search = () => {
    return (
        <Card bordered='false' className='searchCard animate__animated animate__fadeIn animate__delay-1s'>
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
                            message: 'Enter Anything!',
                        },
                    ]}
                >
                    <Row>
                        <Col span={21}> <Input placeholder="Find" /></Col>
                        <Col span={2} offset={1}>
                            <Button shape="circle" icon={<PokeballIcon />} htmlType='submit' className="poke-btn" />
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item
                    name="para"
                    initialValue="a"
                    rules={[
                        {
                            required: true,
                            message: 'Please select any one field!',
                        },
                    ]}
                >
                    <Radio.Group >
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