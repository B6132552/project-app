import { ArrowRightOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory();

  return (
    <>
     <div className="bg-mobile">
        <Row justify="end" className="button-bottom">
          <Col xs={24}>
            <Button
              style={{
                float: "right",
                width: 170,
                height: 52,
                backgroundColor: "#faad14",
                borderTopLeftRadius: 24,
                border: "#fa8c16",
                fontSize: 18,
              }}
              type="primary"
              icon={<ArrowRightOutlined />}
              onClick={()=> history.push('/login')}
            >
              Start
            </Button>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Home