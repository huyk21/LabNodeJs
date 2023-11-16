const express = require("express");
const app = express();
const port = 4000 || process.env.PORT; // process.env.PORT is for Heroku
const expressHbs = require("express-handlebars"); // handlebars

//static files
app.use(express.static(__dirname + "/html"));
//use view template
app.engine(
  // set engine
  "hbs",
  expressHbs.engine({
    // handlebars engine
    layoutsDir: __dirname + "/views/layouts", // layout folder
    partialsDir: __dirname + "/views/partials", // partials folder
    defaultLayout: "layout", // default layout
    extname: "hbs", // extension name
  })
);
app.set("view engine", "hbs"); // set view engine
app.get("/", (req, res) => {
  res.render("index");
});
app.use("/task1.htm", require("./routes/task1Route"));
app.use("/task2.htm", require("./routes/task2Route"));
app.use("/task3.htm", require("./routes/task3Route"));
app.use("/task4.htm", require("./routes/task4Route"));
app.get("/admin", (req, res) => {
  res.render("index", { layout: "admin" });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // listen to port
