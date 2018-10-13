import React from "react";
import axios from "axios";
import api from "../../api";
import "./product.css";

const Product = props => {
	const { id, name, price, img } = props.item;

	let deletePost = () => {
		axios.delete(api + `/${id}`);
		props.deleteProduct(id);
	};

	return (
		<div className="product">
			<div className="overview">
				<h1 className="product-name">{name}</h1>
				<h2 className="product-price">${price}</h2>
			</div>
			<img className="product-image" src={img} alt="Product" />
			<button onClick={deletePost} className="delete">
				Delete
			</button>
			<button
				onClick={() => {
					props.editProduct(id);
				}}
				className="edit"
			>
				Edit
			</button>
		</div>
	);
};

export default Product;
