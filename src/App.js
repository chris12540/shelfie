import React, { Component } from "react";
import axios from "axios";
import api from "./api";

import "./reset.css";
import "./App.css";

import Header from "./component/Header/Header";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Product from "./component/Product/Product";

class App extends Component {
	constructor() {
		super();
		this.state = {
			inventory: [],
			editItem: {}
		};
	}

	componentDidMount() {
		axios.get(api).then(res => {
			this.setState({
				inventory: res.data
			});
		});
	}

	getAddedProduct = newProduct => {
		let updatedInventory = this.state.inventory.slice();
		updatedInventory.unshift(newProduct[0]);
		this.setState({
			inventory: updatedInventory
		});
	};

	deleteProduct = id => {
		const index = this.state.inventory.findIndex(item => item.id === id);
		let updatedInventory = this.state.inventory.slice();

		if (index >= 0) {
			updatedInventory.splice(index, 1);
			this.setState({
				inventory: updatedInventory
			});
		}
	};

	editProduct = id => {
		const { inventory } = this.state;
		const index = inventory.findIndex(item => item.id === id);
		this.setState({
			editItem: inventory[index]
		});
	};

	render() {
		const { inventory, editItem } = this.state;
		return (
			<div className="App">
				<Header />
				<div className="container">
					<Dashboard inventory={inventory} deleteProduct={this.deleteProduct} editProduct={this.editProduct}>
						<Product />
					</Dashboard>
					<Form getAddedProduct={this.getAddedProduct} editItem={editItem} />
				</div>
			</div>
		);
	}
}

export default App;
