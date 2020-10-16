import React from "react";
import { Switch, Typography } from "@material-ui/core";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness4Icon from "@material-ui/icons/Brightness4";

function Header({ theme, changeTheme }) {
	return (
		<header
			style={{
				maxWidth: "42em",
				margin: "0 auto",
				padding: "24px 0",
				display: "flex",
				alignItems: "center"
			}}>
			<Typography variant="h3">B.L.O.G</Typography>
			<div
				style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
				<Switch checked={theme} onChange={changeTheme} color="primary" />
				{theme ? <Brightness4Icon /> : <Brightness5Icon />}
			</div>
		</header>
	);
}

export default Header;
