import React from "react";

const Login = React.lazy(() => import("../../view/login/LoginPage"));

const Home = React.lazy(() => import("../../view/home/Home"));

const Register = React.lazy(() => import("../../view/register/Register"))

const Main = React.lazy(() => import("../../view/main/Main"))

const Food = React.lazy(() => import("../../view/food/Food"))

const Cart = React.lazy(() => import("../../view/cart/Cart"))
const routers = [
  {
    path: `/home`,
    exact: true,
    name: "Home",
    component: Home,
  },
  {
    path: `/login`,
    exact: true,
    name: "Login",
    component: Login,
  },
  {
    path: `/register`,
    exact: true,
    name: "Register",
    component: Register,
  },
  {
    path: `/main`,
    exact: true,
    name: "Main",
    component: Main,
  },
  {
    path: `/cart`,
    exact: true,
    name: "Cart",
    component: Cart,
  },
  {
    path: `/food/:id`,
    exact: true,
    name: "Food",
    component: Food,
  },
];


export default routers;
