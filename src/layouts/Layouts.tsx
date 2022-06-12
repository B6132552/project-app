import { Layout } from "antd";
import React, {  useState } from "react";
import Contents from "./Contents";
import MenuBar from "./MenuBar";

const Layouts = (props: any) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const toggle = () => {
        setCollapsed(!collapsed);
      };
   
   
  return (
    <Layout hasSider>
      <Layout>
        <div >
          <Contents {...props}  />
        </div>
        <MenuBar />
      </Layout>
    </Layout>
  );
};

export default Layouts;
