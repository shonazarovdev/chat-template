import { Outlet } from "react-router-dom";

import { Stack } from "@mui/material";

import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <Stack direction={"row"}>
      <Sidebar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
