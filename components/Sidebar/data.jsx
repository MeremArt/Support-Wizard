import { EventIcon } from "./icons/EventIcon";
import { GuideIcon } from "./icons/GuideIcon";
import { MessageIcon } from "./icons/MessageIcon";
import { PictureIcon } from "./icons/PictureIcon";
import { DocumentIcon } from "./icons/DocumentIcon";
import { StatisticsIcon } from "./icons/StatisticsIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { TbReportAnalytics } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
export const data = [
  {
    section: "Home",
    icon: <HomeIcon />,
    content: [
      {
        title: "Dashboard",
        link: "/dashboard",
      },
      //   {
      //     title: "Travel",
      //     link: "/documents/travel",
      //   },
      //   {
      //     title: "Insurance",
      //     link: "/Documents",
      //   },
    ],
  },
  {
    section: "Messages",
    icon: <MessageIcon />,
    content: [
      {
        title: "Direct Messages",
        link: "/dashboard/Chat",
      },
      {
        title: "Unread",
        link: "/dashboard/Chat",
      },
      {
        title: "Archived",
        link: "/messages/archived",
      },
    ],
  },
  {
    section: "Reporting",
    icon: <TbReportAnalytics size={20} />,
    content: [
      {
        title: "New Ticket",
        link: "/pictures/vacations",
      },
      {
        title: "Solved Ticket",
        link: "/pictures/anniversary",
      },
      //   {
      //     title: "University",
      //     link: "/pictures/university",
      //   },
    ],
  },
  {
    section: "Statistics",
    icon: <StatisticsIcon />,
    content: [
      {
        title: "Page Views",
        link: "/statistics/finances",
      },
      {
        title: "Live Visitors",
        link: "/statistics/call-stats",
      },
      {
        title: "Trip Logs",
        link: "/statistics/trip-logs",
      },
    ],
  },
  {
    section: "Settings",
    icon: <IoIosSettings size={25} />,
    content: [
      {
        title: "User Management",
        link: "/events/weddings",
      },
      //   {
      //     title: "Networking",
      //     link: "/events/networking",
      //   },
    ],
  },
  {
    section: "Guides",
    icon: <GuideIcon />,
    content: [
      {
        title: "Documentation",
        link: "/dashboard/Documentation",
      },
    ],
  },
];
