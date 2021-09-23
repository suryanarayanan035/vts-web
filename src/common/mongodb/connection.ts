const { MogoClient } = require("mongodb");

let client: any = null;
export const getClient = async () => {
  try {
    if (client) {
      return client;
    }
    const uri = process.env.MONGO_URI;
    client = new MogoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    console.info("connected to Mongo DB Successfully");
    return client;
  } catch (error) {
    console.error(error);
    return null;
  }
};
