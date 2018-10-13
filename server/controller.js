const errMsg = "Something went wrong on our end. Don't worry, our engineers are on it! 🔧";

module.exports = {
	get: (req, res) => {
		req.app
			.get("db")
			.get_products()
			.then(products => {
				res.json(products);
			})
			.catch(error => {
				res.status(500).send(errMsg);
				console.log("Error from GET /api/products", error);
			});
	},
	post: (req, res) => {
		req.app
			.get("db")
			.create_product({ ...req.body })
			.then(product => {
				res.json(product);
			})
			.catch(error => {
				res.status(500).send(errMsg);
				console.log("Error from POST /api/products", error);
			});
	},
	update: (req, res) => {
		req.app
			.get("db")
			.update_product({ ...req.params })
			.then(product => {
				res.json(product);
			})
			.catch(error => {
				res.status(500).send(errMsg);
				console.log("Error from PATCH /api/products", error);
			});
	},
	delete: (req, res) => {
		req.app
			.get("db")
			.delete_product({ ...req.params })
			.then(product => {
				res.json(product);
			})
			.catch(error => {
				res.status(500).send(errMsg);
				console.log("Error from DELETE /api/products", error);
			});
	}
};
