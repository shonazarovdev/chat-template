import React from "react";
import {Outlet} from "react-router-dom";
import useLocalStorage from "@hooks/useLocalStorage";

const DashboardLayout = () => {

	const a = useLocalStorage()
	return (<>
		Dashboard Layout
		<Outlet/>
	</>);
};

export default DashboardLayout;
