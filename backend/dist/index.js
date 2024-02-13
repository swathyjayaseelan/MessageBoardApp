import express from "express";
import { messagesRouter } from "./messages/messages.router.js";
const port = 8000;
const app = express();
app.use(express.json());
app.use("/api/messages", messagesRouter);
app.listen(port, () => {
    console.log("now listening in 8000");
});
//# sourceMappingURL=index.js.map