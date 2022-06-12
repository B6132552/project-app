import { Button, Input } from "@nextui-org/react";
import { Col, Form, Row } from "antd";
import React from "react";
import InputForm from "../../component/form/InputForm";
import PasswordForm from "../../component/form/PasswordForm";

const Register = () => {
  return (
    <>
      <div className="body-content">
        <h3 className="title-text">กรอกข้อมูล</h3>
        <Form>
          <Row style={{ marginTop: "10px" }} justify="center">
            <Col span={24}>
              <Form.Item name="name">
                <Input placeholder="ชื่อ" size="lg"/>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="phone">
                <Input placeholder="เบอร์ติดต่อ" size="lg"  />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="email">
                <Input placeholder="ชื่อผู้ใช้งาน" size="lg" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="password">
                <Input.Password
                  style={{ width: "100%" }}
                  placeholder="รหัสผ่าน"
                  size="lg"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row  style={{marginTop: 20}}>
            <Button style={{ textAlign: 'center',width: "90%", position:'fixed', bottom: 40}} color="warning" auto size="lg">
              ยืนยัน
            </Button>
          </Row>
          {/* <InputForm placeholder="ชื่อ" name="name" message="โปรดระบุชื่อ" />
          <InputForm
            placeholder="เบอร์ติดต่อ"
            name="phone"
            message="โปรดระบุเบอร์ติดต่อ"
          />
          <InputForm placeholder="อีเมล" name="email" message="โปรดระบุอีเมล" />
          <InputForm
            placeholder="ชื่อผู้ใช้งาน"
            name="username"
            message="โปรดระบุชื่อผู้ใช้งาน"
          />
          <PasswordForm
            name="password"
            placeholder="รหัสผ่าน"
            message="โปรดระบุรหัสผ่าน"
          />
          <Row justify="center">
            <Button
              htmlType="submit"
              type="primary"
              style={{
                padding: "0 45px",
                height: 52,
                marginTop: 20,
                borderRadius: 6,
                fontSize: 18,
                backgroundColor: "#faad14",
                border: "none",
                width: "100%"
              }}
            >
              ยืนยัน
            </Button>
          </Row> */}
        </Form>
      </div>
    </>
  );
};

export default Register;
