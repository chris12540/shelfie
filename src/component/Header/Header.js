import React, { Component } from "react";
import "./header.css";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<header>
				<img src={require("../../images/shelfie_icon.png")} alt="" className="logo" />
				<h1 className="app-name">SHELFIE</h1>
			</header>
		);
	}
}

export default Header;
