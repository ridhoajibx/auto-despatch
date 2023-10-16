import {
  Link as LinkUI,
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  User,
} from "@nextui-org/react";
import { Fragment, useState } from "react";
import { AcmeLogo } from "@/components/AcmeLogo";
// import { SearchIcon } from "../components/SearchIcon";
import { MdCamera, MdSettings } from "react-icons/md";
import Logo from "@/components/Icons/Logo";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const routes: any = [
  { name: "Live Monitoring", pathname: "/" },
  { name: "Dashboard", pathname: "/dashboard" },
  { name: "Data Log", pathname: "/data-log" },
  { name: "User List", pathname: "/users" },
];

export const Header = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      maxWidth="2xl"
      shouldHideOnScroll
      className="w-full bg-primary text-white"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-white",
        ],
      }}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent justify="start">
        <NavbarBrand className="mr-4 items-center gap-2">
          <Logo className="mb-2" />
          <div className="flex items-center gap-2">
            <p className="font-extrabold text-inherit italic">
              Filling Monitoring
            </p>
          </div>
        </NavbarBrand>
        <span className="hidden sm:inline-block border-b w-[50px]"></span>
        <NavbarContent className="hidden sm:flex justify-start gap-4">
          {routes.map((route: any, index: any) => {
            if (route?.pathname == location.pathname) {
              return (
                <NavbarItem isActive key={index}>
                  <Link className="text-white text-sm" to={route?.pathname}>
                    {route?.name}
                  </Link>
                </NavbarItem>
              );
            }
            return (
              <NavbarItem key={index}>
                <Link className="text-white text-sm" to={route?.pathname}>
                  {route?.name}
                </Link>
              </NavbarItem>
            );
          })}
          
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <User
          name={<span className="hidden sm:flex">Jane Doe</span>}
          description={<span className="hidden sm:flex">Admin</span>}
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            size: "sm",
            color: "secondary",
          }}
          className="transition-transform hidden sm:flex"
        />
        <div className="hidden sm:block border-l h-10 mx-0 sm:mx-2"></div>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <button className="focus:outline-none">
              <Avatar
                className="transition-transform block sm:hidden"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                fallback={
                  <MdCamera
                    className="animate-pulse w-6 h-6 text-default-500"
                    fill="currentColor"
                    size={20}
                  />
                }
              />
              <MdSettings className="w-6 h-6 hidden sm:block" />
            </button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Profile Actions"
            variant="flat"
            color="primary"
            className="text-black"
          >
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <LinkUI
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </LinkUI>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
