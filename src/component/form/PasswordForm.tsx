import { Form, Input, InputProps } from "antd";
import React from "react";

interface Props extends InputProps {
  label?: string;
  name: string;
  message?: string;
}

const PasswordForm = (props: Props) => {
  return (
    <>
      <Form.Item
        name={props.name}
        hasFeedback
        style={{ margin: 10 }}
        rules={[{ required: true, message: props.message }]}
      >
        <Children {...props} />
      </Form.Item>

      <Form.Item
        name="confirm"
        style={{ margin: 10 }}
        hasFeedback
        rules={[
          {
            required: true,
            message: "โปรดยืนยันรหัสผ่าน",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="ยืนยันรหัสผ่าน"
          style={{ height: 55, border: "none" }}
        />
      </Form.Item>
    </>
  );
};
const Children = ({ ...props }: Props) => {
  return <Input.Password {...props} style={{ height: 55, border: "none" }} />;
};

export default PasswordForm;
