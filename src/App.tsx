import "./assets/scss/app.scss";
import { NextUIProvider } from "@nextui-org/react";
import "antd/dist/antd.min.css";
import { ConfigProvider, Spin } from "antd";
import "dayjs/locale/th";
import th from "antd/lib/locale/th_TH";
import { RecoilRoot } from "recoil";
import LoginPage from "./view/login/LoginPage";
import { HashRouter, Redirect, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Suspense } from "react";
import routers from "./assets/routers/routers";
import MenuBar from "./layouts/MenuBar";
import Home from "./view/home/Home";
import Register from "./view/register/Register";
import Layouts from "./layouts/Layouts";
import Food from "./view/food/Food";

function App() {
  return (
    <ConfigProvider locale={th}>
      <HashRouter>
        <Switch>
          <Route path="/login" exact component={() => <LoginPage />} />
          <Route path="/home" exact component={() => <Home />} />
          <Route path="/register" exact component={() => <Register />} />
          <Route path="/food/:id" exact component={() => <Food/>} />
          <CheckRoute />
        </Switch>
      </HashRouter>
    </ConfigProvider>
  );
}

export default App;
const loading = (
  <Spin>
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  </Spin>
);

const CheckRoute = () => {
  return (
    <NextUIProvider>
      <Route
        path="/"
        render={(props) => (
          <RecoilRoot>
            <Layouts {...props} />
          </RecoilRoot>
        )}
      />
    </NextUIProvider>
  );
};
