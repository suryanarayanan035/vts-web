import { getVehicleDetails } from "../controllers/get-vehicle-details";

const express = require("express");
const router = express.Router();
router.get("/", async (req, res) => {
  return getVehicleDetails(req, res);
});
module.exports = router;
