import React from "react";
import "./dashboard.css";
import Product from "../Product/Product";

const Dashboard = props => {
	const inventory = props.inventory.map(item => (
		<Product deleteProduct={props.deleteProduct} item={item} editProduct={props.editProduct} />
	));
	if (inventory.length === 0) {
		inventory.push(<div className="loading">Loading...</div>);
	}
	return <div className="dashboard">{inventory}</div>;
};

export default Dashboard;
