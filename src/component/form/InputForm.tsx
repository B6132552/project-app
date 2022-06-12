import { Form, Input, InputProps } from "antd";
import React from "react";

interface Props extends InputProps {
  label?: string;
  name: string;

  message?: string;
}
const InputForm = (props: Props) => {
  return (
    <Form.Item
      name={props.name}
      style={{ margin: 10 }}
      rules={[{ required: true, message: props.message }]}
    >
      <Children {...props} />
    </Form.Item>
  );
};

const Children = (props: Props) => {
  return <Input {...props} style={{ height: 55, border: "none" }} />;
};

export default InputForm;
