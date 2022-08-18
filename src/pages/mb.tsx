import MbPage from "@/components/MBPage";
import { usePersistFn } from "ahooks";
import { Badge, Button, Mask, NavBar, TabBar } from "antd-mobile";
import {
  AppOutline,
  UnorderedListOutline,
  MessageFill,
  MessageOutline,
  UserOutline,
} from "antd-mobile-icons";
import React, { useState } from "react";
interface IProps {}
const MBMaskDemo: React.FC<IProps> = (props) => {
  const [visible, setVisible] = useState(false);
  const tabs = [
    {
      key: "home",
      title: "首页",
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: "todo",
      title: "待办",
      icon: <UnorderedListOutline />,
      badge: "5",
    },
    {
      key: "message",
      title: "消息",
      icon: (active: boolean) =>
        active ? <MessageFill /> : <MessageOutline />,
      badge: "99+",
    },
    {
      key: "personalCenter",
      title: "我的",
      icon: <UserOutline />,
    },
  ];
  const handleBack = usePersistFn(() => {});
  return (
    <MbPage
      header={
        <NavBar back="返回" onBack={handleBack}>
          标题
        </NavBar>
      }
      footer={
        <TabBar>
          {tabs.map((item) => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
              badge={item.badge}
            />
          ))}
        </TabBar>
      }
    >
      <Button color="primary" onClick={() => setVisible(true)}>
        打开
      </Button>
      <Mask visible={visible} onMaskClick={() => setVisible(false)}>
        <div style={{ backgroundColor: "#fff", height: "50vh" }}>
          121212 121212 121212 121212 121212
        </div>
      </Mask>
    </MbPage>
  );
};

export default MBMaskDemo;
