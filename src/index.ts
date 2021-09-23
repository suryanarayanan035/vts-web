import "module-alias/register";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser());

const userRouter = require("./user/routes");
const vehicleRouter = require("./vehicle/Routes");

app.use("/user", vehicleRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server strated at port ${process.env.PORT}`);
});
