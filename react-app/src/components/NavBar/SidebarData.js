import { MdSpaceDashboard } from "react-icons/md";
import {
  FaPeopleCarry,
  FaFileInvoiceDollar,
  FaFileInvoice,
} from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";

export const SidebarData = [
  {
    title: "DashBoard",
    path: "/dashboard",
    icon: <MdSpaceDashboard />,
    cName: "nav-text",
  },
  {
    title: "Customers",
    path: "/customers",
    icon: <BsFillPeopleFill />,
    cName: "nav-text",
  },
  {
    title: "Jobs",
    path: "/jobs",
    icon: <FaPeopleCarry />,
    cName: "nav-text",
  },
  {
    title: "Invoices",
    path: "/invoices",
    icon: <FaFileInvoiceDollar />,
    cName: "nav-text",
  },
  {
    title: "Estimates",
    path: "/estimates",
    icon: <FaFileInvoice />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <AiFillSetting />,
    cName: "nav-text",
  },
];
