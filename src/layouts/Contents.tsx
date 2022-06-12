import { Layout, Spin } from "antd";
import React from "react";
import { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import CSS from "csstype";
import routers from "../assets/routers/routers";
const { Content } = Layout;

const loading = (
  <Spin>
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  </Spin>
);

const Contents = () => {
  return (
    <Content>
      <Suspense fallback={loading}>
        <Switch>
          {routers.map((router, idx) => {
            return (
              router.component && (
                <Route
                  key={idx}
                  path={router.path}
                  exact={router.exact}
                  component={router.component}
                />
              )
            );
          })}
          <Redirect from="/" to="/" />
        </Switch>
      </Suspense>
    </Content>
  );
};
export default React.memo(Contents);