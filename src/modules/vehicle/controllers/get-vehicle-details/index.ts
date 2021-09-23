import { getClient } from "@common/mongodb/connection";

export const getVehicleDetails = async (req, res) => {
  try {
    let client = await getClient();
    const vehicleTrackingDetails = await client
      .db("vehicle_tracking")
      .collection("vehicle_tracking_details");
    const query = { mobileNo: "8428169669" };
    const details = await vehicleTrackingDetails.find(query);
    console.log(details);
    res.status(200).send({ status: "OK" });
    console.log("Response");
  } catch (error) {
    console.error("Error while fetching vehicleTrackingDetails");
    res.status(500).send({ status: "NOT OK" });
  }
};
