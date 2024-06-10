
/**
 * @name server start script
 */
import dotenv from "dotenv";
import app from "./app";
/**
 * @description Load environment using dotenv
 */
dotenv.config();
const server_name = process.env.SERVER_NAME;
const port = process.env.PORT;


app.listen(port, () => {
  console.log(`${server_name} is running on http://localhost:${port}`);
});
