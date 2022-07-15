import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import {
  FaPeopleCarry,
  FaFileInvoiceDollar,
  FaFileInvoice,
} from "react-icons/fa";

export const SidebarData = [
  {
    title: "DashBoard",
    path: "/dashboard",
    icon: <MdOutlineSpaceDashboard />,
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
    icon: <FiSettings />,
    cName: "nav-text",
  },
];
