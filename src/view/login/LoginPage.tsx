import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Input, Spacer } from "@nextui-org/react";
import { Col, Form, Row } from "antd";
import React from "react";
import email from "../../assets/images/icons/email.svg";
import key from "../../assets/images/icons/key.svg";
import logo from "../../assets/images/icons/avatar.svg";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  return (
    <>
      <div className="BG-Login">
        <Row>
          <Col md={10} style={{ marginTop: "6%" }}>
            <Row justify="center">
              <img className="bran-login" src={logo} alt="" />
              <Form>
                <Row justify="center" style={{ marginTop: 10, fontSize: 20 }}>
                  <h2 style={{ color: "#84a42c" }}>WELCOME</h2>
                </Row>
                <Row style={{ marginTop: "10px" }} justify="center">
                  <Col span={20}>
                    <Form.Item name="username">
                      <Input placeholder="Username" size="lg" />
                    </Form.Item>
                  </Col>
                  <Col span={20}>
                    <Form.Item name="password">
                      <Input.Password
                        style={{ width: "100%" }}
                        placeholder="Password"
                        size="lg"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={20} style={{ marginTop: 20 }}>
                    <Button
                      style={{ width: "100%" }}
                      color="warning"
                      auto
                      size="lg"
                      onClick={() => history.push("/main")}
                    >
                      เข้าสู่ระบบ
                    </Button>
                  </Col>
                  <Col span={20} style={{ marginTop: 10 }}>
                    <Button
                      bordered
                      style={{ width: "100%" ,color: "#84a42c" ,borderColor: '#84a42c'}}
                      auto
                      onClick={() => history.push("/register")}
                      size="lg"
                    >
                      ลงทะเบียน
                    </Button>
                    {/* <Button
                      className="btn-login-register"
                      htmlType="submit"
                      onClick={() => history.push("/register")}
                    >
                      ลงทะเบียน
                    </Button>{" "} */}
                  </Col>
                </Row>
              </Form>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LoginPage;
