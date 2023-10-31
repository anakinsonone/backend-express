const app = require("express")();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});
