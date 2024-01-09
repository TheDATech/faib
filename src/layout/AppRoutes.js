import SpeedIcon from "@mui/icons-material/Speed";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Person2Icon from "@mui/icons-material/Person2";
import HistoryIcon from "@mui/icons-material/History";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import * as React from "react";
import MyDropdownMenu from "./sidebar/MyDropdownMenu";
export const routesList = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <SpeedIcon />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <PersonIcon />,
  },
  {
    name: "Membership",
    path: "/membership",
    icon: <GroupsIcon />,
  },
  {
    name: "Certificate",
    path: "/certificate",
    icon: <WorkspacePremiumIcon />,
  },
  {
    name: "Trainer",
    path: "/trainer",
    icon: <Person2Icon />,
  },
  {
    name: "Order Hisotry",
    path: "/order-histroy",
    icon: <HistoryIcon />,
  },
  {
    name: "Resources",
    path: "/resources",
    icon: <InsertLinkIcon />,
  },
  // {
  //   name: <MyDropdownMenu />,
  //   path: "/resources",
  //   icon: <InsertLinkIcon />,
  // },

];
