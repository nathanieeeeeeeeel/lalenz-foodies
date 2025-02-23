const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000; // You can change this to any port you want

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use("/public", express.static('public'));

app.set("trust proxy", 1);
app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
    try {
        res.render("pages/index", {
            user: req.user,
            currentPage: 'home'
        });
    } catch(err) {
        res.status(500).send("Internal server error.");
        console.log(err.stack);
    };
});

app.get("/menu", (req, res) => {
    try {
        res.render("pages/menu", {
            user: req.user,
            currentPage: 'menu'
        });
    } catch(err) {
        res.status(500).send("Internal server error.");
        console.log(err.stack);
    };
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
