const express = require("express");
const cors = require("cors");
const res = require("express/lib/response");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

const invintory = ["pizza","cake", "burritos", "swordfish steak", "potatos", "tootsie rolls", "hamburger","apple","orange"]

app.get("/api/inventory", (req, res) => {
    console.log(req.query);
    if(req.query.item) {
        const filteredItems = inventory.filter((invItem) =>{
             return invItem.toLowerCase().includes(req.query.item.toLowerCase)}
    )
    res.status(200).send(filteredItems);
} else { 
    res.status(200).send(inventory);
};

app.get("/api/inventory:id", (req, res) => {
    console.log(req.params);
    const numIndex = +req.params.id;
    res.status(200).send(inventory[numIndex]);
});

const SERVER_PORT = 5050;


app.listen(SERVER_PORT, () => {
    console.log(`server is running on ${SERVER_PORT}`);
});
