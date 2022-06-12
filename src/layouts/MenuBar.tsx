
import { useHistory } from "react-router-dom";
import { Badge, TabBar } from "antd-mobile";

import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";

const MenuBar = () => {
  const history = useHistory();
  const tabs = [
    {
      key: "main",
      title: "Home",
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: "cart",
      title: "Cart",
      icon: <UnorderedListOutline />,
      badge: "5",
    },
    {
      key: "message",
      title: "Message",
      icon: (active: boolean) =>
        active ? <MessageFill /> : <MessageOutline />,
      badge: "99+",
    },
    {
      key: "personalCenter",
      title: "User",
      icon: <UserOutline />,
    },
  ];

  const setRouteActive = (value: string) => {
    history.push(value)
  }

  return (
    <div className="footer">
      <TabBar  onChange={value => setRouteActive(value)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key}  icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

export default MenuBar;
