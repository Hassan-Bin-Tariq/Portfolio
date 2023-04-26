import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "./backend/config/config.env" })

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});

function objectSetter() {
    console.log(working)
    var first;
    const user = "Ali@gmail.com"
}
