import React, { Component } from "react";
import axios from "axios";
import api from "../../api";

import "./form.css";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			name: "",
			price: "",
			img: "",
			showSave: false
			// https://goo.gl/bf6CFr
		};
	}

	componentDidUpdate(oldProps) {
		if (oldProps.editItem !== this.props.editItem) {
			const { name, price, img } = this.props.editItem;
			this.setState({ name, price, img, showSave: true });
		}
	}

	submit = () => {
		const { name, price, img } = this.state;
		if (name && price && img) {
			axios.post(api, { name, price, img }).then(res => {
				this.props.getAddedProduct(res.data);
			});
		} else {
			alert("Please enter in all the fields 😇");
		}
	};

	cancel = () => {
		this.setState({
			name: "",
			price: "",
			img: ""
		});
	};

	render() {
		const { name, price, img, showSave } = this.state;
		return (
			<div className="form">
				<input
					type="text"
					value={name}
					placeholder="Lamp"
					onChange={e => {
						this.setState({ name: e.target.value });
					}}
					className="form-input"
				/>
				<input
					type="text"
					value={price}
					placeholder="15"
					onChange={e => {
						this.setState({ price: e.target.value });
					}}
					className="form-input"
				/>
				<input
					type="text"
					value={img}
					placeholder="http://example.com/"
					onChange={e => {
						this.setState({ img: e.target.value });
					}}
					className="form-input"
				/>
				<button className="button" onClick={showSave ? this.props.edit : this.submit}>
					{showSave ? "Save" : "Submit"}
				</button>
				<button className="button" onClick={this.cancel}>
					Cancel
				</button>
				<img src={img} alt="" className="preview" />
			</div>
		);
	}
}

export default Form;
