"use client";
import React, { useEffect, useState } from "react";
import { roboto } from "@/font/font";
import {
  AccountBookFilled,
  BellFilled,
  ProjectFilled,
  IdcardFilled,
  SignalFilled,
  SearchOutlined,
  VideoCameraOutlined,
  RightOutlined,
  LeftOutlined,
  AppstoreFilled,
  CalendarFilled,
} from "@ant-design/icons";
import navWatermark from "../../../public/asset/sideBar.png";
import NavLogo from "../../../public/asset/NavLogo.png";
import { useRouter } from "next/navigation";
import { Layout, Menu, Button } from "antd";
import Navbar from "@/components/Navbar/Navbar";
import NavLink from "../nav-link";
import Image from "next/image";

const { Sider, Content } = Layout;

// import * as React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import Icon from "@cloudscape-design/components/icon";

const MainLayout = ({ children }) => {
  const [activeHref, setActiveHref] = useState("/dashboard");
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const toggleSider = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      {/* <Layout theme="dark" style={{ minHeight: "100vh" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme="light"
          className="fixed "
          style={{ position: "fixed", height: "100vh" , width:"9rem" }}
        >
          <div className=" h-[4.1rem] flex items-center justify-center  border-b">
            <Image className="" src={NavLogo} />
          </div>
          <Menu
            className={`${roboto.className} relative`}
            theme="light"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={[
              {
                key: "g1",
                label: "Menu",
                type: "group",
                children: [
                  {
                    key: "1",
                    icon: <AppstoreFilled />,
                    label: <NavLink href="/dashboard">Dashboard</NavLink>,
                  },
                ],
              },
              {
                key: "g2",
                label: "Approval centre",
                type: "group",
                children: [
                  {
                    key: "2",
                    icon:<CalendarFilled />,
                    label: <NavLink href="/dashboard/requester">My Requests</NavLink>,
                  },
                ],
              },
              {
                key: "g3",
                label: "Support",
                type: "group",
                children: [
                  {
                    key: "3",
                    icon:<CalendarFilled />,
                    label: "Settings",
                  },
                  {
                    key: "4",
                    icon:<CalendarFilled />,
                    label: "Help",
                  },
                ],
              },
            ]}
          />
          <Image src={navWatermark} className="opacity-10"></Image>
         
        </Sider>
        <Layout
          className="site-layout"
          style={{ marginLeft: collapsed ? 80 : 200 }}
        >
          <Navbar />
          <Content
            style={{ margin: "0px 0px", padding: "0px 4px", minHeight: 280,}}
          >
            {children}
          </Content>
        </Layout>
      </Layout> */}

      <div style={{ display: "flex", minHeight: "100vh" }}>
        <div
          style={{
            width: "15vw",
            borderRight: "1px solid #ddd",
            position: "relative",
            overflow:"hidden"
          }}
        >
          <div
            style={{
              padding: "16px",
              borderBottom: "1px solid #ddd",
              zIndex: 1,
            }}
          >
            <Image src={NavLogo} alt="NavLogo" />
          </div>
          <SideNavigation
            style={{ zIndex: 10 }}
            activeHref={activeHref}
            onFollow={(event) => {
              if (!event.detail.external) {
                event.preventDefault();
                setActiveHref(event.detail.href);
                router.push(event.detail.href); // Update the route
              }
            }}
            items={[
              {
                type: "section-group",
                title: "Menu",
                items: [
                  { type: "link", text: "Dashboard", href: "/dashboard" },
                  {
                    type: "link",
                    text: "Requester",
                    href: "/dashboard/requester",
                  },
                ],
              },
              {
                type: "section-group",
                title: "Section 2",
                items: [
                  {
                    type: "link",
                    text: "Page 7",
                    href: "#/page7",
                  },
                  {
                    type: "link",
                    text: "Page 8",
                    href: "#/page8",
                  },
                  {
                    type: "link",
                    text: "Page 9",
                    href: "#/page9",
                  },
                ],
              },
            ]}
          />
          <div
            style={{
              position: "absolute",
              bottom: -300,
              width: "100%",
              opacity: 0.1,
              zIndex: 0,
            }}
          >
            <Image src={navWatermark} alt="Watermark" />
          </div>
        </div>
        <div style={{ flex: 1, padding: "16px", width: "85vw" }}>
          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
