const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");
const massive = require("massive");
require("dotenv").config();

const api = "/api/products";

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
	app.set("db", database);
});

app.get(api, controller.get);
app.post(api, controller.post);
app.patch(api + "/:id", controller.update);
app.delete(api + "/:id", controller.delete);

const PORT = process.env.SERVER_PORT || 25565;
app.listen(PORT, () => {
	console.log(`Server shipped on port ${PORT} ✅`);
});
